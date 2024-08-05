document.querySelector('.mitarbeiter_chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage_mitarbeiter();
    }
});

document.querySelector('.mitarbeiter_message_send').addEventListener('click', function() {
    sendMessage_mitarbeiter();
});

// function displayMessage_mitarbeiter(message, className) {
//     const chatbotText = document.querySelectorAll('.chatbotText_mitarbeiter , .chatbotText_menü');
//     const messageElement = document.createElement('div');
//     messageElement.className = `message ${className}`;
//     messageElement.textContent = message;
//     chatbotText.appendChild(messageElement);
//     chatbotText.scrollTop = chatbotText.scrollHeight;
// }

// function displayMessage(message, className) {
//     // Select both elements
//     const chatbotTextContainers = document.querySelector('.chatbotText_menü');
    
//     // Iterate through each selected element
//     chatbotTextContainers.forEach(chatbotText => {
//         // Create the message element
//         const messageElement = document.createElement('div');
//         messageElement.className = `message ${className}`;
//         messageElement.textContent = message;
        
//         // Append the message element to the current container
//         chatbotText.appendChild(messageElement);
        
//         // Scroll to the bottom of the container
//         chatbotText.scrollTop = chatbotText.scrollHeight;
//     });
// }

function displayMessage_mitarbeiter(message, className) {
    // Select both elements
    const chatbotTextContainers = document.querySelectorAll('.chatbotText_menü, .chatbotText_mitarbeiter');
    
    // Iterate through each selected element
    chatbotTextContainers.forEach(chatbotText => {
        // Create the message element
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;
        
        // Append the message element to the current container
        chatbotText.appendChild(messageElement);
        
        // Scroll to the bottom of the container
        chatbotText.scrollTop = chatbotText.scrollHeight;
    });
}


function sendMessage_mitarbeiter() {
    const chatInput = document.querySelector('.mitarbeiter_chatInput');
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    console.log("userMessage: ", userMessage);
    displayMessage_mitarbeiter(userMessage, 'user-message');
    chatInput.value = '';

    // Show spinner
    // document.querySelector('.chatbotText_mitarbeiter .pos_spinner').style.display = "block";

    // fetch('http://localhost:3000/api/chat', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ message: userMessage, sender: 'customer' })  // Add sender information
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     displayMessage(data.message, 'bot-message');
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     displayMessage('Error: Could not retrieve the response.', 'bot-message');
    // })
    // .finally(() => {
    //     // Hide spinner
    //     document.querySelector('.chatbotText_mitarbeiter .pos_spinner').style.display = "none";
    // });
}
