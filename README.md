# OpenAI API Call Demo

A simple Node.js script demonstrating how to make API calls to OpenAI's GPT-3.5 Turbo model.

## Features

- Makes API calls to OpenAI's GPT-3.5 Turbo model
- Uses a fixed system prompt
- Takes user input via console
- Displays the AI's response and token usage statistics

## ScreenShots
<img width="490" alt="Screenshot 2025-05-28 at 2 15 35 AM" src="https://github.com/user-attachments/assets/ac8710a3-88c1-4e0f-89ec-66a79c527eb2" />


## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

3. Run the script:
```bash
node first_call.js
```

## Dependencies

- openai: For making API calls to OpenAI
- dotenv: For loading environment variables
- readline: For handling user input (built into Node.js)

## Note

Make sure you have an OpenAI API key before running the script. You can get one from [OpenAI's website](https://platform.openai.com/api-keys).
