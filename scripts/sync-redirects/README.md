# Zendesk Redirect Sync

This script automates the management of Zendesk Guide Redirect Rules by syncing a local YAML configuration file with the [Zendesk Redirect Rules API](https://developer.zendesk.com/api-reference/help_center/help-center-api/redirect_rules/). It reads the YAML, creates missing redirects, updates existing ones (targets/status), and deletes redirects not in the YAML.

## Prerequisites

* Python 3.x  
* Dependencies: requests, pyyaml

```
pip install requests pyyaml
```

Set the following environment variables (locally or in GitHub Secrets):

```
ZENDESK_EMAIL = os.environ.get('ZENDESK_EMAIL')
ZENDESK_TOKEN = os.environ.get('ZENDESK_TOKEN')
ZENDESK_SUBDOMAIN = os.environ.get('ZENDESK_SUBDOMAIN')
```

## YAML Format

The script expects a redirects.yaml file with the following structure:

```yml
redirects:
  - redirect_from: "/hc/en-us/account"
    redirect_to: "/hc/en-us/articles/9293587511452-Account-Support"
    redirect_status: 301

  # Slugs in 'redirect_from' are allowed for context but stripped during sync  
  - redirect_from: "/hc/en-us/articles/10598087334428-Trademarks-Licensing"
    redirect_to: "https://www.arduino.cc/en/trademark/"
    redirect_status: 301
```

## Usage

Run the script by passing the path to your redirects YAML file:

```
python3 scripts/sync-redirects/sync\_redirects.py scripts/sync-redirects/redirects.yaml
```

The script will:

1. **Fetch**: Downloads all existing redirect rules from Zendesk.  
2. **Normalize**: Strips slugs from the local YAML `redirect_from` fields.  
3. **Compare**:  
   * If a rule exists locally but not remotely → **Create**.  
   * If a rule exists in both but target/status differ → **Update**.  
   * If a rule exists remotely but not locally → **Delete**.