const log = document.querySelector(".log");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  log.classList.add("active");
});

loginLink.addEventListener("click", () => {
  log.classList.remove("active");
});

var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
  let id = check.checked;
  if (id == true){
      location.href="LoginEn.html";
  }else{
      location.href="LoginEs.html";
  }
}

let url = "http://localhost:3000/users"

function redireccionar7(){
  const emailEn = document.querySelector("#emailEn");
  const passwordEn = document.querySelector("#passwordEn");
  const verification = document.querySelector("#verification");
  
  if(emailEn.value != "") {
    emailEn.classList.add("is-valid");
    emailEn.classList.remove("is-invalid");
  }
  else {
    emailEn.classList.add("is-invalid");
    emailEn.classList.remove("is-valid")
  }
  
  if(passwordEn.value != "") {
    passwordEn.classList.add("is-valid");
    passwordEn.classList.remove("is-invalid");
  }
  else {
    passwordEn.classList.add("is-invalid");
    passwordEn.classList.remove("is-valid");
  }
  
  let resultado = fetch(url)
  .then(response => {
    return response.json()
  }).then(data => {
    data.forEach(function (user) {
      if(emailEn.value == user.email & passwordEn.value == user.password) {
        localStorage.setItem("name", user.name);
        window.location.href = "BienvenidoEn.html";
      }

      else {
        verification.innerHTML = "Email or password is invalid"
        verification.style.color = "red";
      }
    })
  })
}

function redireccionar8(){
  const nameRegEn = document.querySelector("#nameRegEn");
  const emailRegEn = document.querySelector("#emailRegEn");
  const passwordRegEn = document.querySelector("#passwordRegEn");
  const birthdateRegEn = document.querySelector("#birthdateRegEn");
  const genderRegEn = document.querySelector("#genderRegEn");

  user = {
    name: nameRegEn.value,
    birthdate: birthdateRegEn.value,
    gender: genderRegEn.value,
    email: emailRegEn.value,
    password: passwordRegEn.value
  }
  fetch(url , {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data) & location.reload();
  })
}

function redireccionar9(){
  const emailEs = document.querySelector("#emailEs");
  const passwordEs = document.querySelector("#passwordEs");
  const verification = document.querySelector("#verification");
  
  if(emailEs.value != "") {
    emailEs.classList.add("is-valid");
    emailEs.classList.remove("is-invalid");
  }
  else {
    emailEs.classList.add("is-invalid");
    emailEs.classList.remove("is-valid")
  }
  
  if(passwordEs.value != "") {
    passwordEs.classList.add("is-valid");
    passwordEs.classList.remove("is-invalid");
  }
  else {
    passwordEs.classList.add("is-invalid");
    passwordEs.classList.remove("is-valid");
  }
  
  let resultado = fetch(url)
  .then(response => {
    return response.json()
  }).then(data => {
    data.forEach(function (user) {
      if(emailEs.value == user.email & passwordEs.value == user.password) {
        localStorage.setItem("name", user.name);
        window.location.href = "BienvenidoEs.html";
      }
      else {
        verification.innerHTML = "Correo o contraseña es inválido"
        verification.style.color = "red";
      }
    })
  })
}

function redireccionar10(){
  const nameRegEs = document.querySelector("#nameRegEs");
  const emailRegEs = document.querySelector("#emailRegEs");
  const passwordRegEs = document.querySelector("#passwordRegEs");
  const birthdateRegEs = document.querySelector("#birthdateRegEs");
  const genderRegEs = document.querySelector("#genderRegEs");

  user = {
    name: nameRegEs.value,
    birthdate: birthdateRegEs.value,
    gender: genderRegEs.value,
    email: emailRegEs.value,
    password: passwordRegEs.value
  }
  fetch(url , {
    method: "POST", //PUT or PATCH
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data) & location.reload();
  })
}

let Username  = localStorage.getItem("name");
document.querySelector("#namePerson").innerHTML = Username;

function cerrarSesion() {
  localStorage.clear()
  window.location.href = "LoginEn.html"
}

/*GET -> GET + ID
POST -> DATA
PUT -> ID + DATA 
DELETE -> ID*/


