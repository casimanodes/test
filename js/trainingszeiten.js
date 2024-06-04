const monday = document.getElementById('monday');
const friday = document.getElementById('friday');
const sunday = document.getElementById('sunday');

let isAddressVisible = false;
const training_hide = document.querySelectorAll('.training_hide');
const trainingszeiten = document.querySelector('.trainingszeiten');

trainingszeiten.addEventListener('click', function() {
    if(!isAddressVisible){
        isAddressVisible = true;
        trainingszeiten.style.width = "75%";
        training_hide.forEach(element => {
          element.style.height = "1rem";
          element.style.opacity = "1";
        });
        // trainingszeiten.style.width = "80%";
    } else {
        isAddressVisible = false;
        trainingszeiten.style.width = "";

        training_hide.forEach(element => {
          element.style.height = "";
          element.style.opacity = "";
        });
        // trainingszeiten.style.width = "";
    }
});


