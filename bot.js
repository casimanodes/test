// bot.js
// const fetch = require('node-fetch');
const BOT_TOKEN = '7111626752:AAHaOhGLIfzB_y8aa2u02ic-fFTlGHrims0';
const TELEGRAM_API_URL = `https://api.telegram.org/bot7111626752:AAHaOhGLIfzB_y8aa2u02ic-fFTlGHrims0/sendMessage`;
const CHAT_ID = '1851355049';

async function sendMessage(message) {
    const fetch = (await import('node-fetch')).default;
    fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

async function setReminder(date, time, message) {
    const datetime = new Date(`${date}T${time}`);
    const now = new Date();
    if(datetime > now) {
        const delay = datetime.getTime() - now.getTime();
        setTimeout(() => {
            sendMessage(message);
        }, delay);
    } else {
        console.log("The specified time is in the past.");
    }
}

module.exports = { setReminder };


// function setReminder(time, message) {
//     const currentTime = new Date();
//     const reminderTime = new Date(time); // Ensure time is in an appropriate format
//     const delay = reminderTime.getTime() - currentTime.getTime();

//     if (delay > 0) {
//         setTimeout(() => {
//             sendMessage(message);
//         }, delay);
//     } else {
//         console.error('Invalid reminder time.');
//     }
// }


