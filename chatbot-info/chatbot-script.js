document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || send()) {
        alert("Antworten kommen später. Das ganze muss erst auf server hochgeladne und verknüpft werden.")
        sendMessage();
    }
});

function send(){
const sendButton = document.getElementById('send');
sendButton.addEventListener('click', function() {
    sendMessage();
});
}


// funktoin um nachrichten im chatbot zu zeigen
function displayMessage(message, className) {
    const chatbotText = document.querySelector('.chatbotText');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatbotText.appendChild(messageElement);
    chatbotText.scrollTop = chatbotText.scrollHeight;
}


// Funktion um Nachrichten zu senden
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const userMessage = chatInput.value;
    if (userMessage.trim() === '') return;

    // Display user's message
    displayMessage(userMessage, 'user-message');
    chatInput.value = '';

    // Send the message to the server
    fetch('http://localhost:3000/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    // say if an error happend 
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Error: Could not retrieve the response.', 'bot-message');
    });
}



// Funktion um Nachrichten zu empfangen
const data = { message: 'Hallo' };
function fetchData() {
    fetch('http://localhost:3000/retrieve-message')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayMessage(data.message, 'bot-message');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


// muss noch angepasst werden sodass die funktion ausgeführt wird wenn die nachricht gesendet wird
 document.querySelector('.chatbot').addEventListener('click', function() {
        fetchData();
 });
