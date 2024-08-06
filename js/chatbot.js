
// CHATBOT
const open_chatbot = document.querySelector('.chatbot');

// bot svg: 
const svg_open_chatbot = document.querySelector('.gg-bot');
const ggBot = document.querySelector('.gg-bot');
const ggCloseO = document.querySelector('.gg-close-o');
// Close svg: 
const close_chatbot = document.querySelector('.gg-close-o');
const ggCloseAfter = document.querySelector('.gg-close-o::after');
const ggCloseBefore = document.querySelector('.gg-close-o::before');

const chatbot_seiten_container = document.querySelector('.chatbot_seiten_container');
const chatbot_menü_container = document.querySelector('.chatbot_menü_container')
// const titleOfChatbot = document.getElementById('titleOfChatbot')

let chatbot_opened = false;
// const body = document.querySelector('body');

let mitarbeiter_antwort_opened = false;
let menü_opened = false;
let chatbot_site_opened = false;
let mitarbeiter_opened = false;

// klick events für chatbot content 
const menü = document.querySelector(".to_the_menü")
const chatbot = document.querySelectorAll(".to_the_chatbot")
const mitarbeiter = document.querySelector(".to_the_mitarbeiter")
const employee_acces = document.querySelector(".employee_acces")

// containers: 
const mitarbeiter_antwort_container = document.querySelector(".mitarbeiter_antwort_container")
const actual_menü = document.querySelector(".actual_menü")
const chatbot_answer_contianer = document.querySelector(".chatbot_answer_contianer")
const mitarbeiter_answer_contianer = document.querySelector(".mitarbeiter_answer_contianer")



// OPEN THE CHATBOT 
document.querySelector('.chatbot_icons').addEventListener('click', function() {
  if(!chatbot_opened){
    // open_chatbot.classList.add('expanded');
    
    // actual_menü.style.display = "block";
    
    // body.style.overflow = "hidden";
    // chatbot_seiten_container.style.display = "flex";
    // chatbot_menü_container.style.display = "block";

    svg_open_chatbot.style.transform ='rotate(180deg)'
    svg_open_chatbot.style.pointerEvents = "none";
    svg_open_chatbot.style.opacity = "0";
    ggBot.style.display = "none";
    ggCloseO.style.display = "none";
    
    // titleOfChatbot.innerHTML = "Menü"

    setTimeout(() => {
    
            // add close button to chatbot
            close_chatbot.style.display = "block";
            ggCloseAfter.style.display = "block";
            ggCloseBefore.style.display = "block";
            // close_chatbot.style.pointerEvents = "all";
            // close_chatbot.style.opacity = "1";
            // close_chatbot.style.transform ='rotate(180deg)'

    }, 300);
    


    chatbot_opened = true;
  } else {
    // chatbot schließen
    // open_chatbot.classList.remove('expanded');
    // body.style.overflow  = "auto";


    // chatbot_seiten_container.style.display = "";
    // chatbot_menü_container.style.display = "";

    mitarbeiter_antwort_container.style.display = ""
    // actual_menü.style.display = "";
    chatbot_answer_contianer.style.display = ""
    mitarbeiter_answer_contianer.style.display = ""

    // close_chatbot.style.transform ='rotate(0deg)'
    // close_chatbot.style.pointerEvents = "none";
    // close_chatbot.style.opacity = "0";
    close_chatbot.style.display = "none";
    
    setTimeout(() => {
      svg_open_chatbot.style.opacity = "";
      svg_open_chatbot.style.pointerEvents = "";
      svg_open_chatbot.style.transform ='rotate(0)'
      svg_open_chatbot.style.display = "block";
    }, 300);
    chatbot_opened = false;
  }
});


// Antwortseite für miotarbeiter 
employee_acces.addEventListener('click', function(){

  // titleOfChatbot.innerHTML = "Mitarbeier Antwort"

  mitarbeiter_antwort_container.style.display = "flex"
  actual_menü.style.display = "none";
  chatbot_answer_contianer.style.display = ""
  mitarbeiter_answer_contianer.style.display = ""
});


// MENÜ SEITE 
menü.addEventListener('click', function(){
      // titleOfChatbot.innerHTML = "Menü"
      mitarbeiter_antwort_container.style.display = ""
      actual_menü.style.display = "block";
      chatbot_answer_contianer.style.display = ""
      mitarbeiter_answer_contianer.style.display = ""

});



// CHATBOT SEITE 
chatbot.forEach(chatbot => {
  chatbot.addEventListener('click', () => {

    // titleOfChatbot.innerHTML = "Chatbot Swym"
    mitarbeiter_antwort_container.style.display = ""
    actual_menü.style.display = "none";
    chatbot_answer_contianer.style.display = "flex"
    mitarbeiter_answer_contianer.style.display = ""
  });
});

// MITARBEITER SEITE 
mitarbeiter.addEventListener('click', function(){

  // titleOfChatbot.innerHTML = "Mitarbeiter Chat"
  mitarbeiter_antwort_container.style.display = ""
  actual_menü.style.display = "none";
  chatbot_answer_contianer.style.display = ""
  mitarbeiter_answer_contianer.style.display = "flex"
});


