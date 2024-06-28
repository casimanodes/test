
// CHATBOT
const chatbot = document.querySelector('.chatbot');
const chatInput = document.getElementById('chatInput');
const chatClose = document.querySelector('.close');
const chatBotText = document.querySelector(".chatbotText");
const inputField = document.querySelector('.input_send');
const pos_spinner = document.querySelector('.pos_spinner');
const chatbot_svg = document.querySelector('.chatbot_svg');
const chatbotTitle = document.querySelector('.chatbotTitle');

document.querySelector('.chatbot').addEventListener('click', function() {
  chatbot.classList.add('expanded');
  chatInput.style.display = "flex";
  chatClose.style.pointerEvents = "all";
  chatClose.style.opacity = "1";
  chatClose.style.zIndex = "999"; 
  chatBotText.style.visibility = "visible";
  inputField.style.display = "flex";
  chatbot_svg.style.display = "none";
  chatbotTitle.style.display = "flex";
  // pos_spinner.style.display = "block";
  // chatBotText.scrollTop = chatBotText.scrollHeight;
});

function closeBot() {
  chatbot.classList.remove('expanded');
  chatInput.style.display = "none";
  chatClose.style.zIndex = "";
  chatClose.style.pointerEvents = "none";
  chatBotText.style.visibility = "hidden";
  inputField.style.display = "";
  // pos_spinner.style.display = "";
  chatbotTitle.style.display = "none";

  setTimeout(function() {
    chatClose.style.opacity = "0";
  chatbot_svg.style.display = "";

  }, 300);
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


