//to acces button in code
const button = document.querySelector(".btn-tour");
const body = document.querySelector("body");
const contain = document.querySelector(".contain");
const aboutHead = document.querySelector(".about-head");

button.addEventListener("mouseover", () => {
  contain.classList.add("b-g");
});
button.addEventListener("mouseout", () => {
  contain.classList.remove("b-g");
});
button.addEventListener("click", () => {
  contain.classList.add("remove");
});

window.addEventListener("scroll", () => {
  window.scrollY < 10 && window.scrollY > 80
    ? aboutHead.classList.add("animate__wobble")
    : aboutHead.classList.remove("animate__wobble");
});

window.addEventListener("scroll", () => {
  const demohead = document.querySelector(".demo-head");
  window.scrollY > 800
    ? aboutHead.classList.add("animate__wobble")
    : aboutHead.classList.remove("animate__wobble");
});
