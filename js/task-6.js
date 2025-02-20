function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}
const numberInput = document.querySelector("input[type='number']");
const createButton = document.querySelector("[data-create]");
const deleteButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  if (numberInput.value >= 1 && numberInput.value <= 100) {
    createBoxes(numberInput.value);
  }
  numberInput.value = "";
});

deleteButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
