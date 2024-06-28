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


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Laden der Umgebungsvariablen nur im Entwicklungsmodus
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

let responseMessage = 'Test version, tatsächliche daten kommen noch';

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Basic route to confirm server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Endpoint to handle incoming messages from the chatbot
app.post('/api/chatbot', async (req, res) => {
    const userMessage = req.body.message;
    console.log(userMessage);

    try {
        // Send the message to OpenAI using axios
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4",
            messages: [
                { "role": "system", "content": "You are a helpful assistant that tells and explains people what schlagball is. Keep your answers short - Maximum 250 characters. Answer in German, except if the user asks in a different language, then in the same. Make sure to talk about sports a lot and not so much over other topics. When they ask something else, find a creative way to talk about schlagball again" },
                { "role": "user", "content": userMessage }
            ],
            temperature: 1,
            max_tokens: 100,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const responseMessage = response.data.choices[0].message.content;
        console.log('Response from OpenAI:', responseMessage);
        // Return the response to the client
        res.json({ message: responseMessage });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).send('Error communicating with OpenAI');
    }
});

// Endpoint to retrieve the last response message
app.get('/api/retrieve-message', (req, res) => {
    res.json({ message: responseMessage });
});

module.exports = app;
