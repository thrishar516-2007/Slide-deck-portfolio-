// script.js
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
});

// Optional: Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
