function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls>input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
createButton.addEventListener("click", handleClickCreate);
destroyButton.addEventListener("click", handleClickDestroy);
function createBoxes(amount) {
  const arrEl = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    arrEl.push(divEl);
  }
  return boxes.append(...arrEl);
}
function handleClickCreate(event) {
  const amount = inputNumber.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}
function handleClickDestroy() {
  inputNumber.value = "";
  boxes.innerHTML = "";
}
