var imgSizeChanged = false;
window.addEventListener('scroll', function() {
  const img = document.querySelector('main .overlay');
  const img_overlay = document.querySelector('main .img_background');
  const mitglied = document.querySelector('.mitglied');
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
    if (imgSizeChanged) {
      img.style.width = '';
      img.style.height = '';
      img.style.borderRadius = '';
      img_overlay.style.borderRadius = '';
      imgSizeChanged = false;
      // mitglied.style.bottom= '';
      // mitglied.style.left= '';
      // mitglied.style.transform= '';

    }
  }
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
    // else {
    //   entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));