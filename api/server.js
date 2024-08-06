// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const http = require('http');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// const port = 3000;
// const server = http.createServer(app);

// let responseMessage = 'Test version, tatsächliche daten kommen noch';

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(cors());

// // Basic route to confirm server is running
// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// // Endpoint to handle incoming messages from the chatbot
// app.post('/chatbot', async (req, res) => {
//     const userMessage = req.body.message;
//     console.log(userMessage);

//     try {
//         // Send the message to OpenAI using axios
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: "gpt-4",
//             messages: [
//                 { "role": "system", "content": "You are a helpful assistant that tells and explains people what schlagball is. Keep your answers short - Maximum 250 characters. Answer in German, except if the user asks in a different language, then in the same. Make sure to talk about sports a lot and not so much over other topics. When they ask something else, find a creative way to talk about schlagball again" },
//                 { "role": "user", "content": userMessage }
//             ],
//             temperature: 1,
//             max_tokens: 100,
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         const responseMessage = response.data.choices[0].message.content;
//         console.log('Response from OpenAI:', responseMessage);
//         // Return the response to the client
//         res.json({ message: responseMessage });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);
//         res.status(500).send('Error communicating with OpenAI');
//     }
// });

// // Endpoint to retrieve the last response message
// app.get('/retrieve-message', (req, res) => {
//     res.json({ message: responseMessage });
// });

// // Listen for incoming connections
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



// WORKS ::::
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const axios = require('axios');

// // Create express app
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(cors());

// let responseMessage = 'Test version, tatsächliche daten kommen noch';

// // Basic route to confirm server is running
// app.get('/api', (req, res) => {
//     res.send('Server is running');
//     console.log('Server is running');
// });

// // Endpoint to handle incoming messages from the chatbot
// app.post('/api/server', async (req, res) => {
//     const userMessage = req.body.message;
//     console.log(userMessage);

//     try {
//         // Send the message to OpenAI using axios
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: "gpt-4",
//             messages: [
//                 { "role": "system", "content": "You are a helpful assistant that tells and explains people what schlagball is. Keep your answers short - Maximum 250 characters. Answer in German, except if the user asks in a different language, then in the same. Make sure to talk about sports a lot and not so much over other topics. When they ask something else, find a creative way to talk about schlagball again" },
//                 { "role": "user", "content": userMessage }
//             ],
//             temperature: 1,
//             max_tokens: 100,
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         const responseMessage = response.data.choices[0].message.content;
//         console.log('Response from OpenAI:', responseMessage);
//         // Return the response to the client
//         res.json({ message: responseMessage });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);
//         res.status(500).send('Error communicating with OpenAI');
//     }
// });
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// }); 
// Export the app as a Vercel serverless function
// module.exports = app;



// workin code for locally hosting the chatbot api:
// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// // Create express app
// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json()); // Built-in middleware to parse JSON bodies
// app.use(cors());

// // Basic route to confirm server is running
// app.get('/', (req, res) => {
//     res.send('Server is running');
//     console.log('Server is running');
// });

// // Endpoint to handle incoming messages from the chatbot
// app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;
    
//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     console.log('Received message:', userMessage);

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: "gpt-4",
//             messages: [
//                 { "role": "system", "content": "You are a helpful assistant that tells and explains people what schlagball is. Keep your answers short - Maximum 250 characters. Answer in German, except if the user asks in a different language, then in the same. Make sure to talk about sports a lot and not so much over other topics. When they ask something else, find a creative way to talk about schlagball again" },
//                 { "role": "user", "content": userMessage }
//             ],
//             temperature: 1,
//             max_tokens: 100,
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         const responseMessage = response.data.choices[0].message.content;
//         console.log('Response from OpenAI:', responseMessage);
//         res.json({ message: responseMessage });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);
//         res.status(500).json({ error: 'Error communicating with OpenAI' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// trying to use the assistant id:


// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// // Create express app
// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json()); // Built-in middleware to parse JSON bodies
// app.use(cors());

// // Basic route to confirm server is running
// app.get('/', (req, res) => {
//     res.send('Server is running');
//     console.log('Server is running');
// });

// // Endpoint to handle incoming messages from the chatbot
// app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;
    
//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     console.log('Received message:', userMessage);

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: "gpt-4",
//             messages: [
//                 { "role": "user", "content": userMessage }
//             ],
//             temperature: 1,
//             max_tokens: 100,
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Assistant-ID': process.env.ASSISTANT_ID // Assuming you set the Assistant ID in your .env file
//             }
//         });

//         const responseMessage = response.data.choices[0].message.content;
//         console.log('Response from OpenAI:', responseMessage);
//         res.json({ message: responseMessage });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);
//         res.status(500).json({ error: 'Error communicating with OpenAI' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });




//trying to use the assistant
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const OpenAI = require('openai');

// // Create express app
// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(express.json()); // Built-in middleware to parse JSON bodies
// app.use(cors());

// // Initialize OpenAI client with project API key
// const openai = new OpenAI({
//     apiKey: process.env.PROJECT_API_KEY, // Use your project-specific API key here
//     headers: {
//         'OpenAI-Beta': 'assistants=v2'
//     }
// });

// // Hardcoded assistant ID
// const assistantId = 'assistant_id'; // Replace with your actual assistant ID

// // Basic route to confirm server is running
// app.get('/', (req, res) => {
//     res.send('Server is running');
//     console.log('Server is running');
// });

// // Endpoint to handle incoming messages from the chatbot
// app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;

//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     console.log('Received message:', userMessage);

//     try {
//         // Create a new thread for the conversation
//         console.log('Creating thread...');
//         const thread = await openai.beta.threads.create();
//         console.log('Thread created with ID:', thread.id);

//         // Add the user message to the thread
//         console.log('Adding message to thread...');
//         const userMsg = await openai.beta.threads.messages.create(thread.id, {
//             role: "user",
//             content: userMessage
//         });
//         console.log('Message added to thread:', userMsg);

//         // Run the assistant on the thread
//         console.log('Running assistant...');
//         const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
//             assistant_id: assistantId
//         });

//         if (run.status === 'completed') {
//             // List the messages added to the thread by the assistant
//             console.log('Run completed. Listing messages...');
//             const messages = await openai.beta.threads.messages.list(run.thread_id);
//             const responseMessage = messages.data.find(msg => msg.role === 'assistant').content[0].text.value;
//             console.log('Response from Assistant:', responseMessage);
//             res.json({ message: responseMessage });
//         } else {
//             console.log('Run status:', run.status);
//             res.status(500).json({ error: 'Error running assistant' });
//         }
//     } catch (error) {
//         console.error('Error during OpenAI API request:', error);
//         if (error.response) {
//             console.error('Error response data:', error.response.data);
//             res.status(500).json({ error: error.response.data });
//         } else {
//             res.status(500).json({ error: error.message });
//         }
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



// ANOTHER TRY TO USE THE ASSISTANT --- ===== CURRENT CODE =====

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;

//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     try {
//         // Create a new thread
//         const threadResponse = await axios.post('https://api.openai.com/v1/threads', {}, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Thread response:', threadResponse.data);
//         const threadId = threadResponse.data.id;

//         // Send message to the assistant
//         const messageResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             role: "user",
//             content: userMessage
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Message response:', messageResponse.data);

//         // Execute the assistant
//         const runResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/runs`, {
//             assistant_id: process.env.ASSISTANT_ID
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Run response:', runResponse.data);

//         // Retrieve the response
//         const messagesResponse = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Messages response:', JSON.stringify(messagesResponse.data, null, 2));

//         if (!messagesResponse.data || !Array.isArray(messagesResponse.data.messages)) {
//             throw new Error('Invalid response structure');
//         }

//         const assistantMessage = messagesResponse.data.messages.find(m => m.role === 'assistant');
//         if (!assistantMessage) {
//             throw new Error('No assistant response found');
//         }

//         res.json({ message: assistantMessage.content });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);
//         res.status(500).json({ error: 'Error communicating with OpenAI' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



// WOKRS FOR ACCESSING THE ASISSTANT but does not return the message
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;

//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     try {
//         // Create a new thread
//         const threadResponse = await axios.post('https://api.openai.com/v1/threads', {}, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Thread response:', threadResponse.data);
//         const threadId = threadResponse.data.id;

//         // Send message to the assistant
//         const messageResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             role: "user",
//             content: userMessage
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Message response:', messageResponse.data);

//         // Execute the assistant
//         const runResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/runs`, {
//             assistant_id: process.env.ASSISTANT_ID
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Run response:', runResponse.data);

//         // Retrieve the response
//         const messagesResponse = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Messages response:', messagesResponse.data);

//         if (!messagesResponse.data || !messagesResponse.data.messages) {
//             throw new Error('Invalid response structure');
//         }

//         const assistantMessage = messagesResponse.data.messages.find(m => m.role === 'assistant');
//         if (!assistantMessage) {
//             throw new Error('No assistant response found');
//         }

//         res.json({ message: assistantMessage.content });
//     } catch (error) {
//         console.error('Error:', error.response ? error.response.data : error.message);
//         res.status(500).json({ error: 'Error communicating with OpenAI' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });




// AKTUELLSTER STATUS 19.07. 
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const fetchAssistantResponse = async (threadId, retries = 10, delay = 1000) => {
//     for (let i = 0; i < retries; i++) {
//         const messagesResponse = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });

//         console.log('Messages response:', JSON.stringify(messagesResponse.data, null, 2));

//         const assistantMessage = messagesResponse.data.data.find(m => m.role === 'assistant');
//         if (assistantMessage && assistantMessage.content && assistantMessage.content.length > 0) {
//             const textContent = assistantMessage.content.find(c => c.type === 'text');
//             if (textContent && textContent.text && textContent.text.value) {
//                 try {
//                     // Attempt to parse as JSON
//                     const jsonResponse = JSON.parse(textContent.text.value);
//                     if (jsonResponse.message) {
//                         return jsonResponse.message;
//                     } else {
//                         return textContent.text.value; // Return raw text if not JSON
//                     }
//                 } catch (error) {
//                     // If parsing fails, return the raw text without logging an error
//                     console.log('Received non-JSON response, returning as plain text.');
//                     return textContent.text.value;
//                 }
//             }
//         }
//         console.error('No valid text content found in assistant message:', JSON.stringify(assistantMessage, null, 2));
//         await sleep(delay);
//     }
//     throw new Error('Assistant response not available in time');
// };

// app.post('/api/chat', async (req, res) => {
//     const userMessage = req.body.message;

//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     console.log('Received message:', userMessage);

//     try {
//         // Create a new thread
//         const threadResponse = await axios.post('https://api.openai.com/v1/threads', {}, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Thread response:', JSON.stringify(threadResponse.data, null, 2));
//         const threadId = threadResponse.data.id;

//         // Send message to the assistant
//         const messageResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             role: "user",
//             content: userMessage
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Message response:', JSON.stringify(messageResponse.data, null, 2));

//         // Execute the assistant
//         const runResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/runs`, {
//             assistant_id: process.env.ASSISTANT_ID
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Run response:', JSON.stringify(runResponse.data, null, 2));

//         // Poll for the assistant's response
//         const assistantMessageContent = await fetchAssistantResponse(threadId);
//         res.json({ message: assistantMessageContent });
//     } catch (error) {
//         console.error('Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
//         res.status(500).json({ error: 'Error communicating with OpenAI' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


//AKTUELLSTER VERSUCH 6.8.2024

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const ASSISTANT_ID_pls = process.env.ASSISTANT_ID;
const OPENAI_PROJECT_API_KEY_pls = process.env.OPENAI_PROJECT_API_KEY;

const fetchAssistantResponse = async (threadId, retries = 10, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
        const messagesResponse = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            }
        });

        console.log('Messages response:', JSON.stringify(messagesResponse.data, null, 2));

        const assistantMessage = messagesResponse.data.data.find(m => m.role === 'assistant');
        if (assistantMessage && assistantMessage.content && assistantMessage.content.length > 0) {
            const textContent = assistantMessage.content.find(c => c.type === 'text');
            if (textContent && textContent.text && textContent.text.value) {
                try {
                    const jsonResponse = JSON.parse(textContent.text.value);
                    if (jsonResponse.message) {
                        return jsonResponse.message;
                    } else {
                        return textContent.text.value;
                    }
                } catch (error) {
                    console.log('Received non-JSON response, returning as plain text.');
                    return textContent.text.value;
                }
            }
        }
        console.error('No valid text content found in assistant message:', JSON.stringify(assistantMessage, null, 2));
        await sleep(delay);
    }
    throw new Error('Assistant response not available in time');
};

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', userMessage);

    try {
        const threadResponse = await axios.post('https://api.openai.com/v1/threads', {}, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            }
        });
        console.log('Thread response:', JSON.stringify(threadResponse.data, null, 2));
        const threadId = threadResponse.data.id;

        const messageResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/messages`, {
            role: "user",
            content: userMessage
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            }
        });
        console.log('Message response:', JSON.stringify(messageResponse.data, null, 2));

        const runResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/runs`, {
            assistant_id: process.env.ASSISTANT_ID
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            }
        });
        console.log('Run response:', JSON.stringify(runResponse.data, null, 2));

        const assistantMessageContent = await fetchAssistantResponse(threadId);
        res.json({ message: assistantMessageContent });
    } catch (error) {
        console.error('Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
        res.status(500).json({ error: 'Error communicating with OpenAI' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

// neuer versuch mit employee side von dem chatbot 

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// let messages = []; // In-memory storage for messages

// app.get('/', (req, res) => {
//     res.send('Server is running');
// });

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const fetchAssistantResponse = async (threadId, retries = 10, delay = 1000) => {
//     for (let i = 0; i < retries; i++) {
//         const messagesResponse = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });

//         console.log('Messages response:', JSON.stringify(messagesResponse.data, null, 2));

//         const assistantMessage = messagesResponse.data.data.find(m => m.role === 'assistant');
//         if (assistantMessage && assistantMessage.content && assistantMessage.content.length > 0) {
//             const textContent = assistantMessage.content.find(c => c.type === 'text');
//             if (textContent && textContent.text && textContent.text.value) {
//                 try {
//                     const jsonResponse = JSON.parse(textContent.text.value);
//                     if (jsonResponse.message) {
//                         return jsonResponse.message;
//                     } else {
//                         return textContent.text.value; // Return raw text if not JSON
//                     }
//                 } catch (error) {
//                     // If parsing fails, return the raw text without logging an error
//                     console.log('Received non-JSON response, returning as plain text.');
//                     return textContent.text.value;
//                 }
//             }
//         }
//         console.error('No valid text content found in assistant message:', JSON.stringify(assistantMessage, null, 2));
//         await sleep(delay);
//     }
//     throw new Error('Assistant response not available in time');
// };

// app.post('/api/chat', async (req, res) => {
//     const { message, sender } = req.body;

//     if (!message || !sender) {
//         return res.status(400).json({ error: 'Message and sender are required' });
//     }

//     console.log('Received message:', message);

//     messages.push({ message, sender, timestamp: new Date() }); // Store the message

//     if (sender === 'customer') {
//         try {
//             const threadResponse = await axios.post('https://api.openai.com/v1/threads', {}, {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                     'Content-Type': 'application/json',
//                     'OpenAI-Beta': 'assistants=v2'
//                 }
//             });
//             console.log('Thread response:', JSON.stringify(threadResponse.data, null, 2));
//             const threadId = threadResponse.data.id;

//             const messageResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/messages`, {
//                 role: "user",
//                 content: message
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                     'Content-Type': 'application/json',
//                     'OpenAI-Beta': 'assistants=v2'
//                 }
//             });
//             console.log('Message response:', JSON.stringify(messageResponse.data, null, 2));

//             const runResponse = await axios.post(`https://api.openai.com/v1/threads/${threadId}/runs`, {
//                 assistant_id: process.env.ASSISTANT_ID
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                     'Content-Type': 'application/json',
//                     'OpenAI-Beta': 'assistants=v2'
//                 }
//             });
//             console.log('Run response:', JSON.stringify(runResponse.data, null, 2));

//             const assistantMessageContent = await fetchAssistantResponse(threadId);
//             res.json({ message: assistantMessageContent });
//         } catch (error) {
//             console.error('Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
//             res.status(500).json({ error: 'Error communicating with OpenAI' });
//         }
//     } else {
//         // For employee messages, just store them and acknowledge
//         res.status(200).json({ message: 'Message received' });
//     }
// });

// // Endpoint to retrieve all messages
// app.get('/api/messages', (req, res) => {
//     res.status(200).json(messages);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
