window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").classList.add("flyv");
  document.querySelector("#red_container").addEventListener("click", clickRedHandler);
}
function clickRedHandler() {
  console.log("clickRedHandler");
  document.querySelector("#red_container").classList.add("fald");
  document.querySelector("#red_container").addEventListener("animationend", faldDone);
}
function faldDone() {
  console.log("faldDone");
  document.querySelector("#red_container").classList.add("frys");
}

// AD: samtidig med at den fortsætter?
