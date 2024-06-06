const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const http = require('http');

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

    const webhookUrl = 'https://app.cassidyai.com/api/webhook/workflows/clww6nspm05shmc0lohti00zg';

    try {
        await axios.post(webhookUrl, {
            query: userMessage
        });

        res.status(200).send('Message sent to the knowledge base');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error communicating with the knowledge base');
    }
});




// Webhook endpoint to receive responses from the customer support tool
app.post('/webhook-response', async (req, res) => {
    // const responseMessage = req.body.answer;
    responseMessage = "testeeeee";
    
    console.log('webhook:', responseMessage);


    // Store the response message for later retrieval
    try {
        await storeMessage(responseMessage);
        console.log('Received response from customer support tool:', responseMessage);

        // Send an acknowledgment response
        res.status(200).send('Response received');
    } catch (error) {
        console.error('Error storing the message:', error);
        res.status(500).send('Error storing the message');
    }
});

app.get('/retrieve-message', (req, res) => {
    res.json({ message: responseMessage });
});

// Listen for incoming connections
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
