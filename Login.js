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

btnPopup.addEventListener("click", () => {
  log.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  log.classList.remove("active-popup");
});

var check=document.querySelector(".check");
check.addEventListener('click', idioma);