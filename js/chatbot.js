
// CHATBOT
const open_chatbot = document.querySelector('.chatbot');
const svg_open_chatbot = document.querySelector('.open_chatbot');
const close_chatbot = document.querySelector('.close_chatbot');
const chatbot_seiten_container = document.querySelector('.chatbot_seiten_container');
const chatbot_menü_container = document.querySelector('.chatbot_menü_container')
const chatbotTitle = document.querySelector('.chatbotTitle');
const titleOfChatbot = document.getElementById('titleOfChatbot')
let chatbot_opened = false;


// klick events für chatbot content 
const menü = document.querySelector(".to_the_menü")
const chatbot = document.querySelector(".to_the_chatbot")
const mitarbeiter = document.querySelector(".to_the_mitarbeiter")


// containers: 
const menü_contianer = document.querySelector(".menü_contianer")
const chatbot_answer_contianer = document.querySelector(".chatbot_answer_contianer")
const mitarbeiter_answer_contianer = document.querySelector(".mitarbeiter_answer_contianer")

// MENÜ SEITE
menü.addEventListener('click', function(){
      titleOfChatbot.innerHTML = "Menü"
      chatbot_answer_contianer.style.display = "none"
      mitarbeiter_answer_contianer.style.display = "none"
      menü_contianer.style.display = "flex"
      klicked = true;
});

// CHATBOT SEITE 
chatbot.addEventListener('click', function(){
  titleOfChatbot.innerHTML = "Chatbot Swym"
  menü_contianer.style.display = "none"
  mitarbeiter_answer_contianer.style.display = "none"
  chatbot_answer_contianer.style.display = "flex"
  klicked = true;
});

// MITARBEITER SEITE 
mitarbeiter.addEventListener('click', function(){
  titleOfChatbot.innerHTML = "Mitarbeiter Chat"
  menü_contianer.style.display = "none"
  chatbot_answer_contianer.style.display = "none"
  mitarbeiter_answer_contianer.style.display = "flex"
  klicked = true;
});

// OPEN THE CHATBOT 
document.querySelector('.chatbot_icons').addEventListener('click', function() {
  if(!chatbot_opened){
    open_chatbot.classList.add('expanded');
    chatbot_seiten_container.style.display = "flex";
    chatbot_menü_container.style.display = "block";
    svg_open_chatbot.style.transform ='rotate(180deg)'
    svg_open_chatbot.style.pointerEvents = "none";
    svg_open_chatbot.style.opacity = "0";
    chatbotTitle.style.display = "flex";

    setTimeout(() => {
    
            // add close button to chatbot
            close_chatbot.style.pointerEvents = "all";
            close_chatbot.style.opacity = "1";
            close_chatbot.style.transform ='rotate(180deg)'
    }, 300);
    


    chatbot_opened = true;
  } else {
    // close entfernen 
    chatbot_menü_container.style.display = "";
    chatbotTitle.style.display = "";

    open_chatbot.classList.remove('expanded');
    chatbot_seiten_container.style.display = "none";

    close_chatbot.style.transform ='rotate(0deg)'
    close_chatbot.style.pointerEvents = "none";
    close_chatbot.style.opacity = "0";

    setTimeout(() => {
      svg_open_chatbot.style.opacity = "";
      svg_open_chatbot.style.pointerEvents = "";
      svg_open_chatbot.style.transform ='rotate(0)'
    }, 300);



    chatbot_opened = false;
  }
});
