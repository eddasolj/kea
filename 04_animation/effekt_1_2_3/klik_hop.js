window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");

  document.querySelector("#blue_container").addEventListener("click", clickBlueHandler);
}

/*****************************************************/

function clickBlueHandler() {
  console.log("clickBlueHandler");
  document.querySelector("#blue_sprite").classList.add("hop");
}
