
/**
 * Esta funcion se utiliza para marcar visualmente la pagina en la que esta el usuario
 * 
 */
window.addEventListener("DOMContentLoaded", function () {
  /**
   * @param {NodeListOf<HTMLAnchorElement>} links -  Lista de todos los elementos <a> en el documento.
   * @param {string} paginaActual - Ruta de la página actual.
   */
  let links = document.querySelectorAll("a");
  let paginaActual = window.location.pathname;

  /**
   * Iteramos a traves de todos los links para encontrar el que corresponde
   * @param {string} enlacePath - Ruta del enlace actual en la iteración.
   */
  for (let i = 0; i < links.length; i++) {
    let enlacePath = links[i].pathname;

  /**
   *  En cada iteración, compara el enlace que hay en "enlacePath", con el enlace 
   *  que hay en "paginaActual", que es el enlace activo
   *  Si coincide, se le asigna a ese link la clase "active"
   *  */
    if (enlacePath === paginaActual) {
       // Agregar la clase "active" al enlace que corresponde a la página actual.
      links[i].classList.add("active");
    }
  }
});

/**
 * Array con diferentes colores.
 * @param {string[]} - colors
 */
const colors = ["green", "red","blue", "yellow", "grey", "#f15025"];

/**
 * Botón en la pagina.
 * @param {HTMLButtonElement} - btn
 * Muestra el color actual
 * @param {HTMLElement} - color
 */

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/**
 * Función que se ejecuta cuando se hace clic en el botón.
 * Cambia el color de fondo del cuerpo del documento y muestra el color actual.
 * @param {number} randomNumber - Número aleatorio entre 0 y la longitud del array de colores.
 */

btn.addEventListener("click", function () {
  
  const randomNUmber = getRandomNumber();
  /**
   *  Cambiar el color de fondo del cuerpo del documento.
   *  */
  document.body.style.backgroundColor = colors[randomNUmber];
   /**
    * Mostrar el color actual en el elemento del documento.
    *  */ 
  color.textContent = colors[randomNUmber];
});

/**
 * Función que devuelve un número aleatorio entre 0 y la longitud del array de colores.
 * @returns {number} Número aleatorio.
 */

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}

