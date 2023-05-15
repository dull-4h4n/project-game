const toggle = document.getElementsByClassName("toggle")[0];
const nav = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
