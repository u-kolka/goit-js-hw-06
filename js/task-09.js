function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
console.log(body);

button.addEventListener("click", changeColorBody);

function changeColorBody() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
