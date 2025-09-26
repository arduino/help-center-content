---
title: "Understand how the Arduino AI Assistant works and how it uses your data"
id: 19958862731804
---

Learn about the underlying AI models and services used by the Arduino AI Assistant and how your data is processed.

To learn how to use the Arduino AI Assistant, see [About the Arduino AI Assistant](https://support.arduino.cc/hc/en-us/articles/19958917855132).

In this article:

- [How answers are generated](#how-answers-are-generated)
- [Is my code or personal information used to train the Assistant?](#is-my-code-or-personal-information-used-to-train-the-assistant)
- [Terms of use](#terms-of-use)

## How answers are generated

The Arduino AI Assistant uses AWS services and AI models to generate code based on user prompts.

Here's a short summary of the process:

- When a user asks a question, this prompt, along with the user's current Arduino sketch code, is sent to the backend AI models.
- The backend utilizes AWS Bedrock, which is a framework for Generative AI.
- Within Bedrock, the specific AI model used is Claude Sonnet from Anthropic. See more information and the model card of this AI model here: [https://www.anthropic.com/news/claude-3-7-sonnet](https://www.anthropic.com/news/claude-3-7-sonnet)
- To enhance the relevance of the AI's responses, the Arduino AI Assistant employs Retrieval Augmented Generation (RAG) using the Knowledge Bases feature of AWS Bedrock.
  - Arduino maintains a knowledge base of relevant articles, tutorials, and code examples extracted from our documentation platform (`docs.arduino.cc)` and library examples related to libraries developed by Arduino. User sketch code is not included in this knowledge base.
  - When a user asks a question, the system matches the question with relevant documents in the knowledge base.
  - If a match is found, the relevant document(s) are added to the prompt sent to the AI model as additional context.

The AI model (Claude Sonnet 3-7) was pre-trained by Anthropic, and Arduino is not performing model training or fine-tuning. Arduino reviewed the capabilities of Claude 3.7 Sonnet, finding it was already very good at generating code for Arduino sketches. For information about how the AI model was trained, please refer to the model card from Anthropic.

The primary way Arduino improves the model output is through prompt engineering and the use of RAG. Note that the RAG process is not a form of model training.

Arduino also uses a system prompt to instruct the AI model on how to handle requests, stay relevant, and avoid certain topics. Guardrails provided by AWS Bedrock are in place to avoid the generation of dangerous content.

## Is my code or personal information used to train the Assistant? {#is-my-code-or-personal-information-used-to-train-the-assistant}

No, your sketch and your interactions with the assistant prompt are not used for further training of the backend GenAI model.

No personal information is shared with the backend GenAI model. The sketch code and your prompt are shared with the backend GenAI model, hence we recommend that you don’t put any personal details in there. Please review the Terms of use for further details.

## Terms of use

In order to use the Arduino AI Assistant, the user must accept a specific set of terms of use, which also clarify the user responsibilities. You can review the Terms of Conditions when using the Arduino AI Assistant for the first time.

<!-- markdownlint-disable-file HC001 -->
