
// CHATBOT
const open_chatbot = document.querySelector('.chatbot');
const svg_open_chatbot = document.querySelector('.open_chatbot');
const close_chatbot = document.querySelector('.close_chatbot');
const chatbotContainer = document.querySelector('.chatbotContainer');

let chatbot_opened = false;

document.querySelector('.chatbot_icons').addEventListener('click', function() {
  if(!chatbot_opened){
    open_chatbot.style.position = "fixed";
    open_chatbot.classList.add('expanded');
    chatbotContainer.style.display = "flex";
    svg_open_chatbot.style.display = "none";

    // add close button to chatbot
    close_chatbot.style.display = "block";
    close_chatbot.style.pointerEvents = "all";
    close_chatbot.style.opacity = "1";
    close_chatbot.style.zIndex = "999"; 
    chatbot_opened = true;
  } else {
    // close entfernen 
    close_chatbot.style.display = "none";
    close_chatbot.style.pointerEvents = "none";
    close_chatbot.style.opacity = "0";
    close_chatbot.style.zIndex = ""; 
    open_chatbot.classList.remove('expanded');
    chatbotContainer.style.display = "none";
    svg_open_chatbot.style.display = "block";
    chatbot_opened = false;
  }
});
