// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const cors = require('cors');
// const http = require('http');

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

//     const webhookUrl = 'https://app.cassidyai.com/api/webhook/workflows/clww6nspm05shmc0lohti00zg';

//     try {
//         await axios.post(webhookUrl, {
//             query: userMessage
//         });

//         res.status(200).send('Message sent to the knowledge base');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error communicating with the knowledge base');
//     }
// });




// // Webhook endpoint to receive responses from the customer support tool
// app.post('/webhook-response', async (req, res) => {
//     // const responseMessage = req.body.answer;
//     responseMessage = "testeeeee";
    
//     console.log('webhook:', responseMessage);


//     // Store the response message for later retrieval
//     try {
//         await storeMessage(responseMessage);
//         console.log('Received response from customer support tool:', responseMessage);

//         // Send an acknowledgment response
//         res.status(200).send('Response received');
//     } catch (error) {
//         console.error('Error storing the message:', error);
//         res.status(500).send('Error storing the message');
//     }
// });

// app.get('/retrieve-message', (req, res) => {
//     res.json({ message: responseMessage });
// });

// // Listen for incoming connections
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// WORKING VERSION 
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const http = require('http');
// const OpenAI = require('openai');
// const openai = new OpenAI();

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
//         // Send the message to OpenAI
//         const completion = await openai.chat.completions.create({
//             model: "gpt-4",
//             messages: [
//                 { "role": "system", "content": "You are a helpful assistant that tells and explains people what schlagball is. Keep your answers short - Maximum 250 charakters. Answer in german, exept the user asks in a different language, then in the same.  Make sure to talk about sports a lot and not so much over other topics. when they ask something else, find a creative way to talk about shclagball again" },
//                 { "role": "user", "content": userMessage }
//             ],
//             temperature: 1,
//             max_tokens: 100,
//         });

//         const responseMessage = completion.choices[0].message.content;
//         console.log('Response from OpenAI:', responseMessage);
//         // Return the response to the client
//         res.json({ message: responseMessage });
//     } catch (error) {
//         console.error('Error:', error);
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
const http = require('http');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;
const server = http.createServer(app);

let responseMessage = 'Test version, tatsächliche daten kommen noch';

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Basic route to confirm server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Endpoint to handle incoming messages from the chatbot
app.post('/chatbot', async (req, res) => {
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
app.get('/retrieve-message', (req, res) => {
    res.json({ message: responseMessage });
});

// Listen for incoming connections
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
