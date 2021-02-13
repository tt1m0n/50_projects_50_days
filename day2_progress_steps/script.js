const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

var currentActive = 1;

next.addEventListener("click", function() {
  
  if (currentActive < circles.length) {
    
    circles[currentActive].classList.add("active");
    ++currentActive;

    update();
  }

});

prev.addEventListener("click", function() {
  
  if (currentActive > 1) {

    --currentActive;
    circles[currentActive].classList.remove("active");

    update();
  }

});

function update() {
  updatePrev();
  updateNext();

  progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + "%";
};

function updatePrev() {
  if (currentActive > 1) {
    prev.removeAttribute("disabled");
  }

  if (currentActive === 1) {
    prev.setAttribute("disabled", true);
  }
};

function updateNext() {
  if (currentActive === circles.length) {
    next.setAttribute("disabled", true);
  }

  if (currentActive < circles.length) {
    next.removeAttribute("disabled");
  }
};