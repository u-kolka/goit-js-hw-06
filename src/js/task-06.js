const input = document.querySelector("#validation-input");
const inputValidValue = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  input.textContent = event.currentTarget.value;

  if (input.textContent.length === inputValidValue) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.add("invalid");
  }
}
