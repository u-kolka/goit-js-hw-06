const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget.elements);

  const elements = {};
  elements.email = event.currentTarget;
  elements.password = event.currentTarget;

  if (form.email.value === "" || form.password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(elements);
  console.log(`Email: ${form.email.value}, Password: ${form.password.value}`);

  event.currentTarget.reset();
}
