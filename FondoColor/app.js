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


const colors = ["green", "red","blue", "yellow", "grey", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  
  const randomNUmber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNUmber];
  color.textContent = colors[randomNUmber];
});


function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

