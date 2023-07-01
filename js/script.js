window.addEventListener('DOMContentLoaded', function() {

  // styles for btn of top menu

  let topNavBtn = document.getElementsByClassName('top-menu');

  function activeBtn() {
    for (let i = 0; i < topNavBtn.length; i++) {
      topNavBtn[i].classList.remove("active-menu");
    }
    this.classList.add("active-menu");
  }

  for(let i = 0; i < topNavBtn.length; i++) {
    topNavBtn[i].addEventListener('click', activeBtn);
  }

  //Slider

  const slides = document.querySelectorAll('.slider-img'),
        prev = document.querySelector('.prev-arrow'),
        next = document.querySelector('.next-arrow'),
        dotSlider = document.querySelectorAll('.slider-dots');

  let sliderIndex = 0;

  showSlides(sliderIndex);

  function showSlides(x) {
    if (x > slides.length - 1) {
      sliderIndex = 0;
    } 
    if (x < 0) {
      sliderIndex = slides.length - 1;

    }
    
    slides.forEach(item => item.style.display = 'none');
    slides[sliderIndex].style.display = 'block';

    dotSlider.forEach(item => item.classList.remove('dot-act'));
    dotSlider[sliderIndex].classList.add('dot-act');
  }

  function moveSlider(n) {
    showSlides(sliderIndex += n);
  } 

  prev.addEventListener('click', () => {
    moveSlider(-1);
  })

  next.addEventListener('click', () => {
    moveSlider(1);
  })


});