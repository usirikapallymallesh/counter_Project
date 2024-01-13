let container = document.querySelector(".counter-box");
let plusButton = document.querySelector("#plus");
let resetButton = document.querySelector("#reset");
let subtractButton = document.querySelector("#sub");
let result = document.querySelector("#result");
let resultValue = Number.parseInt(result.innerHTML);
function playSound(soundFile) {
  let audio = new Audio(soundFile);
  audio.play();
}

plusButton.addEventListener("click", () => {
  resultValue++;
  result.innerHTML = `${resultValue}`;
  container.style.backgroundColor = "black";
  container.style.background = "linear-gradient(yellow,rgb(214, 164, 37))";
  playSound("clickSound.wav");
});
subtractButton.addEventListener("click", () => {
  resultValue--;
  result.innerHTML = `${resultValue}`;
  container.style.backgroundColor = "blue";
  container.style.background = "linear-gradient(orange,rgb(214, 164, 37))";
  playSound("clickSound.wav");
});
resetButton.addEventListener("click", () => {
  resultValue = 0;
  container.style.background = "linear-gradient(red,rgb(214, 164, 37))";
  result.innerHTML = `${resultValue}`;
  container.style.backgroundColor = "red";
  playSound("clickSound.wav");
});
