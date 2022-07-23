function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
input.addEventListener("input", createBoxes);

function createBoxes(amount) {
  amount = event.currentTarget.value;
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement("div");
    const width = (box.style.width = "30px");
    width + 10;
    box.style.height = "30px";
    console.log(box);
  }
}

// const boxesEl = document.querySelector("#boxes");

// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");

// // createBtn.addEventListener("click", createBoxes);

// function createBoxes(amount) {
//   amount = 5;

//   for (let i = 0; i <= amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = 30;
//     box.style.height = 30;
//     console.log(box);
//   }
//   console.log(boxes);
//   console.log();
// body.style.backgroundColor = getRandomHexColor();
// }
