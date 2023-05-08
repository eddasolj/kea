window.addEventListener("load", sidenVises);
let point = 0;
let ranNum;
const red1 = document.querySelector("#red_container");
const blue1 = document.querySelector("#blue_container");

function sidenVises() {
  console.log("sidenVises");
  ranNum = Math.floor(Math.random() * 4) + 1;
  red1.classList.add("flyv", "pos" + ranNum);
  red1.addEventListener("mousedown", clickRedHandler);
  red1.addEventListener("animationiteration", redReset);
  ranNum = Math.floor(Math.random() * 4) + 1;
  blue1.classList.add("flyv", "pos" + ranNum);
  blue1.addEventListener("mousedown", clickBlueHandler);
  blue1.addEventListener("animationiteration", blueReset);
}

function clickRedHandler() {
  point++;
  console.log(point);
  document.querySelector("#point span").textContent = point;
  red1.classList.add("frys");
  document.querySelector("#red_sprite").classList.add("forsvind");
  red1.addEventListener("animationend", redReset);
}

function redReset() {
  red1.classList = "";
  document.querySelector("#red_sprite").classList = "";
  red1.offsetLeft;
  ranNum = Math.floor(Math.random() * 4) + 1;
  red1.classList.add("flyv", "pos" + ranNum);
}

function clickBlueHandler() {
  point--;
  console.log(point);
  document.querySelector("#point span").textContent = point;
  blue1.classList.add("frys");
  document.querySelector("#blue_sprite").classList.add("forsvind");
  blue1.addEventListener("animationend", blueReset);
}

function blueReset() {
  blue1.classList = "";
  document.querySelector("#blue_sprite").classList = "";
  blue1.offsetLeft;
  ranNum = Math.floor(Math.random() * 4) + 1;
  blue1.classList.add("flyv", "pos" + ranNum);
}
