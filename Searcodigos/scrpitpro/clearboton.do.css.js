document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a los elementos del DOM
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const clearButton = document.querySelector('.clear-button');

    // Agrega un event listener para el botón de búsqueda
    searchButton.addEventListener('click', function () {
      // Aquí puedes realizar la acción de búsqueda si es necesario
      console.log('Realizar búsqueda');
    });

    // Agrega un event listener para el botón de limpiar
    clearButton.addEventListener('click', function () {
      // Limpia el contenido del input al hacer clic en la "X"
      searchInput.value = '';
    });
});