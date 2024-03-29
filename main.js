document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos del DOM
  var searchIcon = document.getElementById("search-icon");
  var searchContainer = document.getElementById("search-container");
  var searchInput = document.getElementById("search-input");
  var searchButton = document.getElementById("search-button");

  // Escuchar clic en el ícono de búsqueda
  searchIcon.addEventListener("click", function() {
    // Mostrar u ocultar el contenedor de búsqueda
    if (searchContainer.style.display === "none") {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  });

  // Escuchar clic en el botón de búsqueda
  searchButton.addEventListener("click", function() {
    var searchTerm = searchInput.value.trim(); // Obtener el término de búsqueda

    // Redirigir a Google con el término de búsqueda
    if (searchTerm !== "") {
      window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
    }
  });
});
