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
      mitglied.style.bottom= 'calc(0% - 3.5rem)';
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

const originalMonday = monday.innerHTML;
const originalFriday = friday.innerHTML;
const originalSunday = sunday.innerHTML;

const training_hide = document.querySelector('.training_hide');
let isAddressVisible = false;
const trainingszeiten = document.querySelector('.trainingszeiten');
document.querySelector('.trainingszeiten').addEventListener('click', function() {
    if(!isAddressVisible){
        // monday.innerHTML = originalMonday + ' adresse';
        // friday.innerHTML = originalFriday + ' adresse';
        // sunday.innerHTML = originalSunday + ' adresse';
        isAddressVisible = true;
        training_hide.style.height = "1rem";
        training_hide.style.opacity = "1";
        trainingszeiten.style.width = "80%";
    } else {
        monday.innerHTML = originalMonday;
        friday.innerHTML = originalFriday;
        sunday.innerHTML = originalSunday;
        isAddressVisible = false;
        training_hide.style.height = "";
        training_hide.style.opacity = "";
        trainingszeiten.style.width = "";

    }
});


// DROPDOWM MENU 



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