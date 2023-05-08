window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").addEventListener("click", clickRedHandler);
}
function clickRedHandler() {
  console.log("clickRedHandler");
  document.querySelector("#red_container").classList.remove("hop");
  document.querySelector("#red_container").offsetLeft;
  document.querySelector("#red_container").classList.add("hop");
}
