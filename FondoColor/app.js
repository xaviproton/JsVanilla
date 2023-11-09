
/**
 * Función que se ejecuta cuando el DOM se ha cargado completamente.
 * Encuentra el enlace correspondiente a la página actual y le asigna la clase "active".
 *
 * 
 * @callback DOMContentLoadedCallback
 */
/**
 * 
 *
 * @function
 * @param {string} event - DOMContentLoaded
 * @param {DOMContentLoadedCallback} callback - La función vacia.
 * @param {boolean} [useCapture=false] - Especifica si el evento debe capturarse durante la fase de captura
 * @returns {void}
 */

window.addEventListener("DOMContentLoaded", function () {
  // Obtiene todos los enlaces en la página
  let links = document.querySelectorAll("a");

  // Obtiene la ruta de la página actual
  let paginaActual = window.location.pathname;

  /**
   * Itera a través de todos los enlaces para encontrar el que corresponde a la página actual.
   *
   * @param {Element} link - Elemento de enlace actual en la iteración.
   */
  for (let i = 0; i < links.length; i++) {
    let enlacePath = links[i].pathname;

    /**
     * Compara la ruta del enlace actual con la ruta de la página actual.
     * Si coinciden, agrega la clase "active" al enlace.
     *
     * @param {string} enlacePath - Ruta del enlace actual en la iteración.
     * @param {string} paginaActual - Ruta de la página actual.
     */
    if (enlacePath === paginaActual) {
      // Agrega la clase "active" al enlace que corresponde a la página actual.
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

