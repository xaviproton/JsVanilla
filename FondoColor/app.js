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