function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
input.addEventListener("input", createBoxes);
createBtn.addEventListener("click", createBoxes);

const amount = 5;

function createBoxes(amount) {
  // amount = event.currentTarget.value;
  for (let i = 0; i <= amount; i++) {
    const boxes = document.createElement("div");
  }

  boxesEl.append(boxes);
  console.log(amount * boxes);
  console.log(input.textContent);
  // body.style.backgroundColor = getRandomHexColor();
}
