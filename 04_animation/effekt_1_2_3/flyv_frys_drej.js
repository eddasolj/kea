window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").classList.add("flyv");
  document.querySelector("#red_container").addEventListener("click", clickRedHandler);
}

/*****************************************************/

function clickRedHandler() {
  console.log("clickRedHandler");
  document.querySelector("#red_container").classList.add("frys");
  document.querySelector("#red_sprite").classList.add("drej");
}
