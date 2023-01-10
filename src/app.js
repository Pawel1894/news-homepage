const menuCheckboxEl = document.getElementById("menu-checkbox");
const closeBtnEl = document.getElementById("close-btn");
const openBtnEl = document.getElementById("open-btn");
const menuEl = document.getElementById("navigation");
const bodyEl = document.getElementsByTagName("body")[0];

closeBtnEl.addEventListener("click", () => {
  menuEl.style.display = "none";
});

openBtnEl.addEventListener("click", () => {
  menuEl.style.display = "block";
});
