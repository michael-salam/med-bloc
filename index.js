// assign variables to elements that we want to manipulate
const ctaBtns = document.querySelector(".cta-btns");

window.addEventListener("scroll", handleShowCtaBtns);

function handleShowCtaBtns() {
  if (window.scrollY > 400) {
    ctaBtns.classList.remove("hidden");
    ctaBtns.classList.add("visible");
  }
  if (window.scrollY < 400) {
    ctaBtns.classList.replace("visible", "invisible");
  }
}
