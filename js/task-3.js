const imputName = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
imputName.addEventListener("input", handleInput);
function handleInput(event) {
  name.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") {
    name.textContent = "Anonymous";
  }
}
