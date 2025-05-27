require('dotenv').config();
const OpenAI = require('openai');
const readline = require('readline');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const SYSTEM_PROMPT = "You are a helpful assistant who provides clear, concise answers.";

async function getCompletion(userPrompt) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userPrompt }
            ]
        });

        const response = completion.choices[0].message.content;
        const totalTokens = completion.usage.total_tokens;
        const promptTokens = completion.usage.prompt_tokens;
        const completionTokens = completion.usage.completion_tokens;

        console.log("\nAssistant's Response:", response);
        console.log("\nToken Usage:");
        console.log("- Prompt tokens:", promptTokens);
        console.log("- Completion tokens:", completionTokens);
        console.log("- Total tokens:", totalTokens);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

function main() {
    rl.question('Enter your prompt (or "quit" to exit): ', async (userPrompt) => {
        if (userPrompt.toLowerCase() === 'quit') {
            rl.close();
            return;
        }

        await getCompletion(userPrompt);
        
        // Continue asking for input
        main();
    });
}

if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY not found in .env file");
    process.exit(1);
}

console.log("Welcome to the OpenAI Chat Completion Demo!");
console.log("Using model: gpt-3.5-turbo");
console.log("Type 'quit' to exit\n");

main();
