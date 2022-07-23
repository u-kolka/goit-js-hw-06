let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log("Кликнули на декремент");
  console.log(counterValue);
});

incrementBtn.addEventListener("click", function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log("Кликнули на инкремент");
  console.log(counterValue);
});
