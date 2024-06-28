// document.getElementById('chatInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//         document.querySelector('.pos_spinner').style.display = "block";
//     }
// });

// document.getElementById('send').addEventListener('click', function() {
//     sendMessage();
//     document.querySelector('.pos_spinner').style.display = "block";

// });

// function displayMessage(message, className) {
//     const chatbotText = document.querySelector('.chatbotText');
//     const messageElement = document.createElement('div');
//     messageElement.className = `message ${className}`;
//     messageElement.textContent = message;
//     chatbotText.appendChild(messageElement);
//     chatbotText.scrollTop = chatbotText.scrollHeight;
// }

// function sendMessage() {
//     const chatInput = document.getElementById('chatInput');
//     const userMessage = chatInput.value;
//     if (userMessage.trim() === '') return;

//     displayMessage(userMessage, 'user-message');
//     chatInput.value = '';


//     fetch('http://localhost:3000/chatbot', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: userMessage })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         displayMessage(data.message, 'bot-message');
//         document.querySelector('.pos_spinner').style.display = "none";

//     })
//     .catch(error => {
//         console.error('Error:', error);
//         displayMessage('Error: Could not retrieve the response.', 'bot-message');
//     document.querySelector('.pos_spinner').style.display = "none";
    
//     });
// }
document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
        document.querySelector('.pos_spinner').style.display = "block";
    }
});

document.getElementById('send').addEventListener('click', function() {
    sendMessage();
    document.querySelector('.pos_spinner').style.display = "block";
});

function displayMessage(message, className) {
    const chatbotText = document.querySelector('.chatbotText');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatbotText.appendChild(messageElement);
    chatbotText.scrollTop = chatbotText.scrollHeight;
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const userMessage = chatInput.value;
    if (userMessage.trim() === '') return;
    console.log("userMessage: ", userMessage);
    displayMessage(userMessage, 'user-message');
    chatInput.value = '';

    fetch('/api/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayMessage(data.message, 'bot-message');
        document.querySelector('.pos_spinner').style.display = "none";
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Error: Could not retrieve the response.', 'bot-message');
        document.querySelector('.pos_spinner').style.display = "none";
    });
}
