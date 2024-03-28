// app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static('public')); // Serve static files from 'public' directory

const { setReminder } = require('./bot');

const PORT = process.env.PORT || 3000;

app.post('/setReminder', (req, res) => {
    const { date, time, message } = req.body;
    setReminder(date, time, message);
    res.json({ status: 'success', message: 'Reminder set successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
