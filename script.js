// home.js
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("na");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});
