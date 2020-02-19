$(document).ready(function(){
    $('.examples').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000
    });
  });

var counter1 = document.querySelector(".counter1 span").innerHTML;
var counter2 = document.querySelector(".counter2 span").innerHTML;
var observerSections = document.querySelectorAll(".counter-box");

var number1 = parseInt(counter1);
var number2 = parseInt(counter2);

function increase1() {
  setInterval(() => {
    if (number1 < 1500) {
      number1 = number1 + 1;
      document.querySelector(".counter1 span").textContent = number1;
    }
  }, 50);
}
function increase2() {
  setInterval(() => {
    if (number2 < 100) {
      number2 = number2 + 1;
      document.querySelector(".counter2 span").textContent = number2;
    }
  }, 50);
}


function increase() {
  increase1();
  increase2();
}

let options = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting === false) {
      return;
    } else {
      increase();
    }
  });
}, options);

observerSections.forEach(o => observer.observe(o));