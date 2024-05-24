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
