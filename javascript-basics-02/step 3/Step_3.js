let newDiv = document.querySelector("#input-value");
let nameInput = document.querySelector("#name");

nameInput.addEventListener("keyup", () => {
  newDiv.textContent = nameInput.value;
});
nameInput.addEventListener("keydown", () => {
  newDiv.textContent = nameInput.value;
});
