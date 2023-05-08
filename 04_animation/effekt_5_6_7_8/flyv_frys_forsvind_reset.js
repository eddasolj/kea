window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").classList.add("flyv", "pos1");
  document.querySelector("#red_container").addEventListener("mousedown", clickRedHandler);
}
function clickRedHandler() {
  console.log("clickRedHandler");
  document.querySelector("#red_container").classList.add("frys");
  document.querySelector("#red_sprite").classList.add("forsvind");
  document.querySelector("#red_container").addEventListener("animationend", redReset);
}
function redReset() {
  console.log("redReset");
  document.querySelector("#red_container").classList = "";
  document.querySelector("#red_sprite").classList = "";
  document.querySelector("#red_container").offsetLeft;
  document.querySelector("#red_container").classList.add("flyv", "pos2");
}

// AD: frys og forsvind i den samme box? container og sprite? Hvornår brug man container og hvornår sprite?
