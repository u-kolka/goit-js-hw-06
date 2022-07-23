const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputAddName);
input.addEventListener("blur", onInputBlur);

function onInputAddName(event) {
  output.textContent = event.currentTarget.value;
}

function onInputBlur() {
  if (output.textContent === "") {
    const nameless = "Anonymous";
    output.textContent = nameless;
  }
}
