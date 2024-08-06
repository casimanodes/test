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


// WORKS 
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
//     console.log("userMessage: ", userMessage);
//     displayMessage(userMessage, 'user-message');
//     chatInput.value = '';

//     fetch('http://localhost:3000/api/chat', {
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
//         document.querySelector('.pos_spinner').style.display = "none";
//     });
// }




// AKTUELLSTER CODE: 19.07

// console.log("chatbot new");

// document.querySelector('.chatInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// });
// // BUTTON 
// document.querySelector('.message_send').addEventListener('click', function() {
//     sendMessage();
// });

// function displayMessage(message, className) {
//     const chatbotText = document.querySelector('.chatbot_answer_contianer .chatbotText_bot');
//     const messageElement = document.createElement('div');
//     messageElement.className = `message ${className}`;
//     messageElement.textContent = message;
//     chatbotText.appendChild(messageElement);
//     chatbotText.scrollTop = chatbotText.scrollHeight;
// }

// function sendMessage() {
//     const chatInput = document.querySelector('.chatInput');
//     const userMessage = chatInput.value.trim();
//     if (userMessage === '') return;

//     console.log("userMessage: ", userMessage);
//     displayMessage(userMessage, 'user-message');
//     chatInput.value = '';

//     // Show spinner
//     document.querySelector('.pos_spinner').style.display = "block";

//     fetch('/api/server', {
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
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         displayMessage('Error: Could not retrieve the response.', 'bot-message');
//     })
//     .finally(() => {
//         // Hide spinner
//         document.querySelector('.pos_spinner').style.display = "none";
//     });
// }

// JETZT JETZT NUERER CODE 
document.querySelector('.chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
// BUTTON 
document.querySelector('.message_send').addEventListener('click', function() {
    sendMessage();
});

function displayMessage(message, className) {
    const chatbotText = document.querySelector('.chatbot_answer_contianer .chatbotText_bot');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatbotText.appendChild(messageElement);
    chatbotText.scrollTop = chatbotText.scrollHeight;
}

function sendMessage() {
    const chatInput = document.querySelector('.chatInput');
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    console.log("userMessage: ", userMessage);
    displayMessage(userMessage, 'user-message');
    chatInput.value = '';

    // Show spinner
    document.querySelector('.pos_spinner').style.display = "block";

    fetch('/api/server', {
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
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Error: Could not retrieve the response.', 'bot-message');
    })
    .finally(() => {
        // Hide spinner
        document.querySelector('.pos_spinner').style.display = "none";
    });
}



// versuch mit employee side - chatbot 

// document.querySelector('.chatInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// });

// document.querySelector('.message_send').addEventListener('click', function() {
//     sendMessage();
// });

// function displayMessage(message, className) {
//     const chatbotText = document.querySelector('.chatbot_answer_contianer .chatbotText_bot');
//     const messageElement = document.createElement('div');
//     messageElement.className = `message ${className}`;
//     messageElement.textContent = message;
//     chatbotText.appendChild(messageElement);
//     chatbotText.scrollTop = chatbotText.scrollHeight;
// }

// // function displayMessage(message, className) {
// //     // Select both elements
// //     const chatbotTextContainers = document.querySelector('.chatbotText_bot');
    
// //     // Iterate through each selected element
// //     chatbotTextContainers.forEach(chatbotText => {
// //         // Create the message element
// //         const messageElement = document.createElement('div');
// //         messageElement.className = `message ${className}`;
// //         messageElement.textContent = message;
        
// //         // Append the message element to the current container
// //         chatbotText.appendChild(messageElement);
        
// //         // Scroll to the bottom of the container
// //         chatbotText.scrollTop = chatbotText.scrollHeight;
// //     });
// // }



// function sendMessage() {
//     const chatInput = document.querySelector('.chatInput');
//     const userMessage = chatInput.value.trim();
//     if (userMessage === '') return;

//     console.log("userMessage: ", userMessage);
//     displayMessage(userMessage, 'user-message');
//     chatInput.value = '';

//     // Show spinner
//     document.querySelector('.chatbotText_bot .pos_spinner').style.display = "block";

//     fetch('http://localhost:3000/api/chat', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: userMessage, sender: 'customer' })  // Add sender information
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         displayMessage(data.message, 'bot-message');
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         displayMessage('Error: Could not retrieve the response.', 'bot-message');
//     })
//     .finally(() => {
//         // Hide spinner
//         document.querySelector('.chatbotText_bot .pos_spinner').style.display = "none";
//     });
// }
