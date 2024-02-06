var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  if (id == true) {
    location.href = "BienvenidoEs.html";
  } else {
    location.href = "BienvenidoEn.html";
  }
}
function entrarCar() {
  const cartagenaSel = document.querySelector("#cartagenaSel");
  if (cartagenaSel.value == 1) {
    window.open("Itinerarios/itinerario cartagena/dia1.html", "_blank");
  } else if (cartagenaSel.value == 2) {
    window.open("Itinerarios/itinerario cartagena/dia2.html", "_blank");
  } else if (cartagenaSel.value == 3) {
    window.open("Itinerarios/itinerario cartagena/dia3.html", "_blank");
  } else if (cartagenaSel.value == 4) {
    window.open("Itinerarios/itinerario cartagena/dia4.html", "_blank");
  } else if (cartagenaSel.value == 5) {
    window.open("Itinerarios/itinerario cartagena/dia5.html", "_blank");
  }
}

function entrarSan() {
  const santaMartaSel = document.querySelector("#santaMartaSel");
  if (santaMartaSel.value == 1) {
    window.open("Itinerarios/itinerario santa marta/dia1.html", "_blank");
  } else if (santaMartaSel.value == 2) {
    window.open("Itinerarios/itinerario santa marta/dia2.html", "_blank");
  } else if (santaMartaSel.value == 3) {
    window.open("Itinerarios/itinerario santa marta/dia3.html", "_blank");
  } else if (santaMartaSel.value == 4) {
    window.open("Itinerarios/itinerario santa marta/dia4.html", "_blank");
  } else if (santaMartaSel.value == 5) {
    window.open("Itinerarios/itinerario santa marta/dia5.html", "_blank");
  }
}

function entrarEje() {
  const ejeCafeteroSel = document.querySelector("#ejeCafeteroSel");
  if (ejeCafeteroSel.value == 1) {
    window.open("Itinerarios/itinerario eje cafetero/dia1.html ", "_blank");
  } else if (ejeCafeteroSel.value == 2) {
    window.open("Itinerarios/itinerario eje cafetero/dia2.html", "_blank");
  } else if (ejeCafeteroSel.value == 3) {
    window.open("Itinerarios/itinerario eje cafetero/dia3.html", "_blank");
  } else if (ejeCafeteroSel.value == 4) {
    window.open("Itinerarios/itinerario eje cafetero/dia4.html", "_blank");
  } else if (ejeCafeteroSel.value == 5) {
    window.open("Itinerarios/itinerario eje cafetero/dia5.html", "_blank");
  }
}

function entrarCal() {
  const caliSel = document.querySelector("#caliSel");
  if (caliSel.value == 1) {
    window.open("Itinerarios/itinerario cali/dia1.html", "_blank");
  } else if (caliSel.value == 2) {
    window.open("Itinerarios/itinerario cali/dia2.html", "_blank");
  } else if (caliSel.value == 3) {
    window.open("Itinerarios/itinerario cali/dia3.html", "_blank");
  } else if (caliSel.value == 4) {
    window.open("Itinerarios/itinerario cali/dia4.html", "_blank");
  } else if (caliSel.value == 5) {
    window.open("Itinerarios/itinerario cali/dia5.html", "_blank");
  }
}

function entrarMed() {
  const medellinSel = document.querySelector("#medellinSel");
  if (medellinSel.value == 1) {
    window.open("Itinerarios/itinerario medellin/dia1.html", "_blank");
  } else if (medellinSel.value == 2) {
    window.open("Itinerarios/itinerario medellin/dia2.html", "_blank");
  } else if (medellinSel.value == 3) {
    window.open("Itinerarios/itinerario medellin/dia3.html", "_blank");
  } else if (medellinSel.value == 4) {
    window.open("Itinerarios/itinerario medellin/dia4.html", "_blank");
  } else if (medellinSel.value == 5) {
    window.open("Itinerarios/itinerario medellin/dia5.html", "_blank");
  }
}

function entrarBog() {
  const bogotaSel = document.querySelector("#bogotaSel");
  if (bogotaSel.value == 1) {
    window.open("Itinerarios/itinerario bogota/dia1.html", "_blank");
  } else if (bogotaSel.value == 2) {
    window.open("Itinerarios/itinerario bogota/dia2.html", "_blank");
  } else if (bogotaSel.value == 3) {
    window.open("Itinerarios/itinerario bogota/dia3.html", "_blank");
  } else if (bogotaSel.value == 4) {
    window.open("Itinerarios/itinerario bogota/dia4.html", "_blank");
  } else if (bogotaSel.value == 5) {
    window.open("Itinerarios/itinerario bogota/dia5.html", "_blank");
  }
}

function cerrarSesion() {
  localStorage.clear();
  window.location.href = "http://127.0.0.1:5500/Login/LoginEn.html";
}
