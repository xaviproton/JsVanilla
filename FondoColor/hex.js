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
  // Obtiene todos los elementos de enlace (<a>) en el documento
  let links = document.querySelectorAll("a");

  // Obtiene la ruta de la página actual
  let paginaActual = window.location.pathname;

  /**
   * Itera a través de los enlaces para encontrar el enlace correspondiente a la página actual.
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
 * Array que contiene dígitos y letras para generar colores hexadecimales aleatorios.
 * @type {Array}
 */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/**
 * Obtiene el botón y el elemento de texto para mostrar el color hexadecimal.
 * @type {Element}
 */
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/**
 * Agrega un evento click al botón para generar un color hexadecimal aleatorio.
 *
 * @event click
 * @callback
 */
btn.addEventListener("click", function () {
  /**
   * Genera un número aleatorio dentro del rango del array "hex".
   * @function
   * @returns {number} - Número aleatorio.
   */
  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  /**
   * @type {string}
   */
  let hexColor = "#";

  // Genera un color hexadecimal aleatorio concatenando valores aleatorios del array "hex"
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  // Muestra el color hexadecimal generado en el elemento de texto y cambia el color de fondo del cuerpo
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});