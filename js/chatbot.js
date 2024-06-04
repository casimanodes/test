
// CHATBOT
const chatbot = document.querySelector('.chatbot');
const chatInput = document.getElementById('chatInput');
const chatClose = document.querySelector('.close');
const chatBotText = document.querySelector(".chatbotText");
const chatbotTitle = document.querySelector('.chatbot_title');
const inputField = document.querySelector('.input_send');

document.querySelector('.chatbot').addEventListener('click', function() {
  chatbot.classList.add('expanded');
  chatInput.style.display = "flex";
  chatClose.style.pointerEvents = "all";
  chatClose.style.opacity = "1";
  chatClose.style.zIndex = "999"; 
  chatBotText.style.visibility = "visible";
  chatbotTitle.style.transform = "rotate(0deg)";
  inputField.style.display = "flex";
  // chatBotText.scrollTop = chatBotText.scrollHeight;
});

function closeBot() {
  chatbot.classList.remove('expanded');
  chatInput.style.display = "none";
  chatClose.style.zIndex = "";
  chatClose.style.pointerEvents = "none";
  chatBotText.style.visibility = "hidden";
  chatbotTitle.style.transform = "";
  inputField.style.display = "";

  setTimeout(function() {
    chatClose.style.opacity = "0";
  }, 100);
}


document.addEventListener('click', function(e) {
  // Überprüfen Sie, ob das geklickte Element nicht der Chatbot ist
  if (!e.target.closest('.chatbot')) {
    closeBot();
  }
});
document.querySelector('.close').addEventListener('click', function() {
  closeBot();
});


