function menu() {
  const button = document.querySelector(".btn");
  const nav = document.querySelector(".nav__li");

  button.addEventListener("onclick", () => {
    nav.classList.toggle("activo");
  });
}
