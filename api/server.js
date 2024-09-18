


// New try ======================= now 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    // res.send('Server is running');
    console.log('Server is running');
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

app.post('/api/server', async (req, res) => {
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



// Vercle code versuch funktinniert eher nicht, 7.8. 
// const axios = require('axios');

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
//                         return textContent.text.value;
//                     }
//                 } catch (error) {
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

// export default async (req, res) => {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ error: 'Method not allowed' });
//     }

//     const userMessage = req.body.message;

//     if (!userMessage) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     console.log('Received message:', userMessage);

//     try {
//         const threadResponse = await axios.post('https://api.openai.com/v1/threads', {}, {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_PROJECT_API_KEY}`,
//                 'Content-Type': 'application/json',
//                 'OpenAI-Beta': 'assistants=v2'
//             }
//         });
//         console.log('Thread response:', JSON.stringify(threadResponse.data, null, 2));
//         const threadId = threadResponse.data.id;

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

//         const assistantMessageContent = await fetchAssistantResponse(threadId);
//         res.json({ message: assistantMessageContent });
//     } catch (error) {
//         console.error('Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
//         res.status(500).json({ error: 'Error communicating with OpenAI' });
//     }
// };
