window.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("a");
  let paginaActual = window.location.pathname;

  for (let i = 0; i < links.length; i++) {
    let enlacePath = links[i].pathname;

    // Comparar el pathname del enlace con el pathname actual
    if (enlacePath === paginaActual) {
      links[i].classList.add("active");
    }
  }
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}