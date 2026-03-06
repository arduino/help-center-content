import os
import yaml
import requests
import sys
import argparse
import re

ZENDESK_EMAIL = os.environ.get('ZENDESK_EMAIL')
ZENDESK_TOKEN = os.environ.get('ZENDESK_TOKEN')
ZENDESK_SUBDOMAIN = os.environ.get('ZENDESK_SUBDOMAIN')

# Basic validation
if not all([ZENDESK_EMAIL, ZENDESK_TOKEN, ZENDESK_SUBDOMAIN]):
    print("❌ Error: Missing ZENDESK environment variables (EMAIL, TOKEN, or SUBDOMAIN).")
    sys.exit(1)

# API Auth & Headers
BASE_URL = f"https://{ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/guide/redirect_rules"
AUTH = (f"{ZENDESK_EMAIL}/token", ZENDESK_TOKEN)
HEADERS = {"Content-Type": "application/json"}

def load_local_rules(file_path):
    """Reads the local YAML file from the provided path."""
    try:
        with open(file_path, 'r') as f:
            data = yaml.safe_load(f)
            raw_rules = data.get('redirects', [])
            
            # Normalize inputs immediately
            for rule in raw_rules:
                rule['redirect_from'] = normalize_url(rule['redirect_from'])
                
            return raw_rules
    except FileNotFoundError:
        print(f"❌ Error: File '{file_path}' not found.")
        sys.exit(1)
    except yaml.YAMLError as e:
        print(f"❌ Error parsing YAML: {e}")
        sys.exit(1)

def fetch_remote_rules():
    """
    Fetches all existing rules from Zendesk.
    """
    print("☁️  Fetching existing rules from Zendesk...")
    rules_map = {} 
    url = BASE_URL
    
    while url:
        response = requests.get(url, auth=AUTH)
        if response.status_code != 200:
            print(f"❌ API Error fetching rules: {response.text}")
            print(response)
            sys.exit(1)
            
        data = response.json()
        for rule in data.get('records', []):
            rules_map[rule['redirect_from']] = {
                'id': rule['id'],
                'redirect_from': rule['redirect_from'],
                'redirect_to': rule['redirect_to'],
                'redirect_status': int(rule['redirect_status'])
            }
        
        url = data.get('next_page')
        
    print(f"ℹ️  Found {len(rules_map)} existing rules in Zendesk.")
    return rules_map

# Unneeded? Just have one set_rule method
def create_rule(rule_data):
    """Creates a new rule."""
    payload = {
        "redirect_rule": {
            "redirect_from": rule_data['redirect_from'],
            "redirect_to": rule_data['redirect_to'],
            "redirect_status": rule_data.get('redirect_status', 301)
        }
    }
    
    resp = requests.post(BASE_URL, auth=AUTH, json=payload, headers=HEADERS)
    
    if resp.status_code == 201 or resp.status_code == 204:
        print(f"✅ Created: {rule_data['redirect_from']} → {rule_data['redirect_to']}")
    else:
        print(f"❌ Failed to Create {rule_data['redirect_from']}: {resp.status_code}")

def update_rule(rule_id, rule_data):
    """Updates an existing rule."""
    url = f"https://{ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/guide/redirect_rules"
    
    payload = {
        "redirect_rule": {
            "redirect_from": rule_data['redirect_from'],
            "redirect_to": rule_data['redirect_to'],
            "redirect_status": rule_data.get('redirect_status', 301)
        }
    }
    
    resp = requests.post(url, auth=AUTH, json=payload, headers=HEADERS)
    
    if resp.status_code == 200 or resp.status_code == 204:
        print(f"🔄 Updated: {rule_data['redirect_from']} → {rule_data['redirect_to']}")
    else:
        print(f"❌ Failed to Update {rule_data['redirect_from']}: {resp.status_code}")
        print(resp)
        sys.exit(1)

def delete_rule(rule_id, source, target):
    """Deletes a rule."""
    url = f"https://{ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/guide/redirect_rules/{rule_id}"
    resp = requests.delete(url, auth=AUTH)
    
    if resp.status_code == 204:
        print(f"🗑️  Deleted: {source} → {target}")
    else:
        print(f"❌ Failed to Delete {source}: {resp.status_code}")

def normalize_url(url):
    """
    Strips slugs from Zendesk article/section URLs to match API requirements.
    Input:  /hc/en-us/articles/123-My-Slug
    Output: /hc/en-us/articles/123
    """
    if not url:
        return url
    
    # Regex to capture the base path + ID, ignoring the slug
    pattern = r"(/hc/[a-z]{2}(?:-[a-z]{2})?/(?:articles|sections|categories|topics|posts)/)(\d+)(?:-[^/?#]*)?"
    normalized = re.sub(pattern, r"\1\2", url)
    return normalized

def main():
    # Parse Command Line Arguments
    parser = argparse.ArgumentParser(description="Sync Zendesk Redirects")
    parser.add_argument("file", help="Path to the redirects YAML file")
    args = parser.parse_args()

    # 1. Load Data
    print(f"📂 Loading rules from: {args.file}")
    local_rules_list = load_local_rules(args.file)
    remote_rules_map = fetch_remote_rules()

    # Convert list to dict for easier lookup, keyed by 'redirect_from'
    local_rules_map = {item['redirect_from']: item for item in local_rules_list}

    print(f"📋 Processing {len(local_rules_map)} local rules...")

    # 2. Iterate Local Rules (Create or Update)
    for source, local_data in local_rules_map.items():
        if source in remote_rules_map:
            # Rule exists, check if it needs updating
            remote_data = remote_rules_map[source]
            
            # Compare targets
            if remote_data['redirect_to'] != local_data['redirect_to'] or remote_data['redirect_status'] != local_data['redirect_status']:
                print(remote_data['redirect_to'])
                print(local_data['redirect_to'])
                print(remote_data['redirect_status'])
                print(local_data['redirect_status'])
                update_rule(remote_data['id'], local_data)
            else:
                print(f"⏩ Up to date: {source} → {local_data['redirect_to']}")
            
            # Remove from remote_rules_map so we know it's "handled"
            del remote_rules_map[source]
        else:
            create_rule(local_data)

    # 3. Iterate remaining Remote Rules (Delete)
    if remote_rules_map:
        print(f"\n⚠️  Found {len(remote_rules_map)} rules in Zendesk that are NOT in YAML.")
        print("Starting deletion process...")
        for source, data in remote_rules_map.items():
            delete_rule(data['id'], source, data['redirect_to'])
    else:
        print("\n✨ Sync complete. No extra rules found in Zendesk.")

if __name__ == "__main__":
    main()
