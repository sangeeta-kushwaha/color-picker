const randomBtn = document.querySelector(".randomBtn");
const applyBtn = document.querySelector(".applyBtn");
const colorInput = document.querySelector("#colorInput");
const currentColorValue = document.getElementById("currentColorValue");
const container = document.querySelector(".container");
const currentColor = document.querySelector("#currentColor");

let colorChanger = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerText = color;
};

const handleRandomBtnClick = () => {
  let hexValue = "0123456789abcdef";
  let hCode = "#";

  for (let i = 0; i < 6; i++) {
    hCode = hCode + hexValue[Math.floor(Math.random() * 16)];
  }
  colorChanger(hCode);
};
const handleApplyBtnClick = () => {
  let color = colorInput.value.trim();
  colorChanger(color);

  let div = document.createElement("div");

  div.style.color = color;
  if (!div.style.color) {
    alert(`${color} is not valid`);
  }

  colorInput.value = "";
};

const enter = (e) => {
  if (e.key === "Enter") {
    handleApplyBtnClick();
  }
};

colorInput.addEventListener("keydown", enter);

randomBtn.addEventListener("click", handleRandomBtnClick);

applyBtn.addEventListener("click", handleApplyBtnClick);

currentColor.addEventListener("copy", () => {
  console.log("coppppy");
  alert(`copied your ${currentColor.innerText}`);
});
