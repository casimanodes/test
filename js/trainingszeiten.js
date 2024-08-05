const monday = document.getElementById('monday');
const friday = document.getElementById('friday');
const sunday = document.getElementById('sunday');

let isAddressVisible = false;
const training_hide = document.querySelectorAll('.training_hide');
const trainingszeiten = document.querySelector('.trainingszeiten');


if (window.matchMedia("(max-width: 768px)").matches) {
  console.log("Viewport width is less than or equal to 768px");
  if (window.scrollY > window.innerHeight * 0.1) {
    if (!imgSizeChanged) {
      img.style.width = '95%';
      img.style.height = '95%';
      img.style.borderRadius = '1rem';
      img_overlay.style.borderRadius = '1rem';
      imgSizeChanged = true;

      // mitglied.style.bottom = 'calc(0% - 4rem)';
      // mitglied.style.left= 'calc(50% + 0.25rem)';
      // mitglied.style.transform = 'translateX(-50%)';


    }
  } else {

  }
} else {
  // Code to execute when the viewport width is greater than 768px
  console.log("Viewport width is greater than 768px");
}
trainingszeiten.addEventListener('click', function() {
    if(!isAddressVisible){
        isAddressVisible = true;
        // trainingszeiten.style.width = "75%";
        training_hide.forEach(element => {
          element.style.height = "1rem";
          element.style.opacity = "1";
        });
        // trainingszeiten.style.width = "80%";
    } else {
        isAddressVisible = false;
        // trainingszeiten.style.width = "";

        training_hide.forEach(element => {
          element.style.height = "";
          element.style.opacity = "";
        });
        // trainingszeiten.style.width = "";
    }
});


