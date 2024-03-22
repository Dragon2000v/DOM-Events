const box = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

createBtn.addEventListener("click", updateMarkup);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let sizes = 30;
  const boxesArr = [];
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    boxesArr.push(myBox);

    sizes += 10;
  }
  box.append(...boxesArr);
}

function destroyBoxes() {
  box.innerHTML = "";
}

function updateMarkup() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}