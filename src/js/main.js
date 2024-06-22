var hambuger = document.getElementById("hambuger");
var links = document.getElementById("links");

hambuger.addEventListener("click", () => {
  links.classList.toggle("active");
});
