const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputAddName);

function onInputAddName(event) {
  if (input.value === "") {
    const nameless = "Anonymous";
    return (output.textContent = nameless);
  }
  output.textContent = event.currentTarget.value;
}
