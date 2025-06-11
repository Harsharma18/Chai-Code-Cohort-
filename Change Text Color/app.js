const redButton = document.querySelector("#redButton");
const greenButton = document.querySelector("#greenButton");
const blueButton = document.querySelector("#blueButton");
const purpleButton = document.querySelector("#purpleButton");
const resetButton = document.querySelector("#resetButton");
const colortext = document.getElementById("color-text");
redButton.addEventListener("click", () => {
  colortext.style.color = "red";
});
greenButton.addEventListener("click", () => {
  colortext.style.color = "green";
});

blueButton.addEventListener("click", () => {
  colortext.style.color = "blue";
});

purpleButton.addEventListener("click", () => {
  colortext.style.color = "purple";
});

resetButton.addEventListener("click", () => {
  colortext.style.color = "white";
});
