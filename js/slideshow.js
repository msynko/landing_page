/*
Slide Show. This script resposible for image slideshow on landing page.

Author: Marina Synko.

*/

let slideIndex = 1;

function plusSlides(n) {
  showDivs(slideIndex += n);
}


function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("APslides");
  const dots = document.getElementsByClassName("dot");

  if (n > x.length) {
    slideIndex = +1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
