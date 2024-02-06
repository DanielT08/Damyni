var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  if (id == true) {
    location.href = "index.html";
  } else {
    location.href = "indexen.html";
  }
}

function redireccionar() {
  window.location.href = "Login/LoginEn.html";
}

function redireccionar13() {
  window.location.href = "Login/LoginEs.html";
}

// buscar//
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");
let hasFocus = false; // Variable para rastrear si el campo de búsqueda tiene el foco

// Objeto con los países y sus respectivas URLs de redirección
const Paises = {
  Colombia: "Ciudedes/index.html",
  Peru: "BienvenidoEs.html",
  Mexico: "html",
  Ecuador: ".html",
  Argentina: ".html",
};

// Función para mostrar las opciones de Paises
function showCountryOptions(options) {
  resultsContainer.innerHTML = "";

  options.forEach((option) => {
    const optionElement = document.createElement("p");
    optionElement.textContent = option;
    resultsContainer.appendChild(optionElement);
  });

  // Muestra los resultados solo si hay opciones disponibles y si el campo de búsqueda tiene el foco
  if (options.length > 0 && hasFocus) {
    resultsContainer.style.display = "block";
  } else {
    resultsContainer.style.display = "none";
  }
}

// Función para redirigir a la página del país seleccionado
function redirectToCountryPage(country) {
  // Oculta los resultados antes de redirigir
  resultsContainer.style.display = "none";

  // Redirige a la página del país seleccionado solo si el campo de búsqueda tiene el foco y la tecla es Enter
  if (hasFocus && event.key === "Enter") {
    const selectedCountry = Paises[country];
    if (selectedCountry) {
      if (country === "Colombia") {
        alert("Debes iniciar sesión para poder buscar un pais");
      } else {
        window.location.href = selectedCountry;
      }
    }
  }
}

// Evento de clic en el campo de búsqueda para mostrar las opciones de Paises
searchInput.addEventListener("click", function () {
  hasFocus = true;
  const query = searchInput.value.trim().toLowerCase();
  const filteredCountries = Object.keys(Paises).filter((country) => country.toLowerCase().includes(query));
  showCountryOptions(filteredCountries);
});

// Evento de pérdida de enfoque en el campo de búsqueda para ocultar los resultados
searchInput.addEventListener("blur", function () {
  hasFocus = false;
  resultsContainer.style.display = "none";
});

// Evento de entrada en el campo de búsqueda para mostrar las opciones de Paises
searchInput.addEventListener("input", function () {
  const query = searchInput.value.trim().toLowerCase();
  const filteredCountries = Object.keys(Paises).filter((country) => country.toLowerCase().includes(query));
  showCountryOptions(filteredCountries);
});

// Evento de pulsación de tecla para manejar el caso cuando se borra una letra o se presiona Enter
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    // Borra los resultados si se presiona la tecla de retroceso (Backspace)
    resultsContainer.style.display = "none";
  } else {
    // Redirige al país seleccionado al presionar la tecla Enter
    const selectedCountry = resultsContainer.querySelector("p");
    if (selectedCountry) {
      redirectToCountryPage(selectedCountry.textContent);
    }
  }
});
