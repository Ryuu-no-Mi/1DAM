function Slider() {
  //Declarando Varibles
  const sliders = [...document.querySelectorAll(".slider_body")];
  const arrowNext = document.querySelector("#next");
  const arrowBefore = document.querySelector("#before");
  let value;

  //"Botones" #Next y #Before
  arrowNext.addEventListener("click", () => changePosition(1));

  arrowBefore.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(
      document.querySelector(".slider_body--show").dataset.id
    );
    value = currentElement;
    value += change;

    if (value === 0 || value == sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    //Toggle
    //Si tiene la clase "slider_body--show" se la quita
    //Si no la tiene, le agrega la clase "slider_body--show"
    sliders[currentElement - 1].classList.toggle("slider_body--show");

    sliders[value - 1].classList.toggle("slider_body--show");
  }
}
Slider();

function Slider_img() {
  //Declarando Varibles
  const sliders = [...document.querySelectorAll(".slider_img")];
  const arrowNext = document.querySelector("#next");
  const arrowBefore = document.querySelector("#before");
  let value;

  //"Botones" #Next y #Before
  arrowNext.addEventListener("click", () => changePosition(+1));

  arrowBefore.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(
      document.querySelector(".slider_img--show").dataset.id
    );
    value = currentElement;
    value += change;

    if (value === 0 || value == sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    //Toggle
    //Si tiene la clase "slider_img--show" se la quita
    //Si no la tiene, le agrega la clase "slider_img--show"
    sliders[currentElement - 1].classList.toggle("slider_img--show");

    sliders[value - 1].classList.toggle("slider_img--show");
  }
}
Slider_img();
