const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector("#close");

openMenu.addEventListener("click", () => {
  nav.classList.add("visible");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("visible");
});
