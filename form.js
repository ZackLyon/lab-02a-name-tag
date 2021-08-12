const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button");
const nameField = document.getElementById("name-area");
const colorButton = document.getElementById("color-button");
const nametagColorTop = document.getElementById("top");
const nametagColorBottom = document.getElementById("bottom");
const nameChanges = document.getElementById("name-changes");
const colorArray = ["forestgreen", "gold", "cornflowerblue", "darkmagenta", "red"];
let newColor = 0;
let numOfChanges = 0;
submitButton.addEventListener('click', () => {
  nameField.textContent = userInput.value;
  numOfChanges++;
  nameChanges.textContent = numOfChanges;
})

colorButton.addEventListener('click', () => {
  if (newColor >= colorArray.length) {
    newColor = 0;
  }
  nametagColorTop.style.backgroundColor = colorArray[newColor];
  nametagColorBottom.style.backgroundColor = colorArray[newColor];
  newColor++;
})