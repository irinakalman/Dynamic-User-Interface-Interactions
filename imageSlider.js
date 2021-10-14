var slideIndex = 1;
showSlides(slideIndex);

const btnPrev = document.querySelector('.prev');
btnPrev.addEventListener('click', () => {
  plusSlides(-1);
  reset();
});
const btnNext = document.querySelector('.next');
btnNext.addEventListener('click', () => {
    plusSlides(1);
reset();
});

function reset(){
    clearInterval(timer);
    timer = setInterval(myTimer, 5000);    
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// set timeout for slides
let timer = setInterval(myTimer, 5000);
function myTimer() {
  const slide = plusSlides(1);
}