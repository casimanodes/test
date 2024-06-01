var imgSizeChanged = false;

window.addEventListener('scroll', function() {
  var img = document.querySelector('main img');
  const mitglied = document.querySelector('.mitglied');
  if (window.scrollY > window.innerHeight * 0.1) {
    if (!imgSizeChanged) {
      img.style.width = '95%';
      img.style.height = '95%';
      img.style.borderRadius = '0.5rem';
      imgSizeChanged = true;
      // alert("done")
      mitglied.style.bottom = 'calc(0% - 1.25rem)';
    }
  } else {
    if (imgSizeChanged) {
      img.style.width = '';
      img.style.height = '';
      img.style.borderRadius = '';
      imgSizeChanged = false;
      mitglied.style.bottom= '';

    }
  }
});

const monday = document.getElementById('monday');
const friday = document.getElementById('friday');
const sunday = document.getElementById('sunday');



const training_hide = document.querySelectorAll('.training_hide');
let isAddressVisible = false;
const trainingszeiten = document.querySelector('.trainingszeiten');
trainingszeiten.addEventListener('click', function() {
    if(!isAddressVisible){
        isAddressVisible = true;
        training_hide.forEach(element => {
          element.style.height = "1rem";
          element.style.opacity = "1";
        });
        trainingszeiten.style.width = "80%";
    } else {
        isAddressVisible = false;
        training_hide.forEach(element => {
          element.style.height = "";
          element.style.opacity = "";
        });
        trainingszeiten.style.width = "";
    }
});


// CHATBOT
const chatbot = document.querySelector('.chatbot');
const chatInput = document.getElementById('chatInput');
const chatClose = document.querySelector('.close');
const chatBotText = document.querySelector(".chatbotText");
const chatbotTitle = document.querySelector('.chatbot_title');
document.querySelector('.chatbot').addEventListener('click', function() {
  chatbot.classList.add('expanded');
  chatInput.style.display = "flex";
  chatClose.style.pointerEvents = "all";
  chatClose.style.opacity = "1";
  chatClose.style.zIndex = "999"; 
  chatBotText.style.visibility = "visible";
  chatbotTitle.style.transform = "rotate(0deg)";
  // chatBotText.scrollTop = chatBotText.scrollHeight;
});

function closeBot() {
  chatbot.classList.remove('expanded');
  chatInput.style.display = "none";
  chatClose.style.zIndex = "";
  chatClose.style.pointerEvents = "none";
  chatBotText.style.visibility = "hidden";
  chatbotTitle.style.transform = "";

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








// DROPDOWNNAVBAR
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
   const dropdownButton = item.querySelector('.dropdown__button') 

   // 2. Select each button click
   dropdownButton.addEventListener('click', () =>{
       // 7. Select the current show-dropdown class
       const showDropdown = document.querySelector('.show-dropdown')
       
       // 5. Call the toggleItem function
       toggleItem(item)

       // 8. Remove the show-dropdown class from other items
       if(showDropdown && showDropdown!== item){
           toggleItem(showDropdown)
       }
   })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
   // 3.1. Select each dropdown content
   const dropdownContainer = item.querySelector('.dropdown__container')

   // 6. If the same item contains the show-dropdown class, remove
   if(item.classList.contains('show-dropdown')){
       dropdownContainer.removeAttribute('style')
       item.classList.remove('show-dropdown')
   } else{
       // 4. Add the maximum height to the dropdown content and add the show-dropdown class
       dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
       item.classList.add('show-dropdown')
   }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
     dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
   // Validate if the media query reaches 1118px
   if(mediaQuery.matches){
       // Remove the dropdown container height style
       dropdownContainer.forEach((e) =>{
           e.removeAttribute('style')
       })

       // Remove the show-dropdown class from dropdown item
       dropdownItems.forEach((e) =>{
           e.classList.remove('show-dropdown')
       })
   }
}

addEventListener('resize', removeStyle)