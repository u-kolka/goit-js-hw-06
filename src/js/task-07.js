const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeFontSize);
input.value = input.getAttribute("min");

function changeFontSize(event) {
  input.textContent = event.currentTarget.value;
  text.style.fontSize = `${input.textContent}px`;
  console.log(input.textContent);
}
