window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").classList.add("flyv");
  document.querySelector("#red_container").addEventListener("animationiteration", flyvengang);
}

function flyvengang() {
  console.log("flyvengang");
  document.querySelector("#blue_container").classList.remove("hop");
  document.querySelector("#blue_container").offsetLeft;
  document.querySelector("#blue_container").classList.add("hop");
}
//   document.querySelector("#blue_container").addEventListener("animationend", hopDone);
// }

// function hopDone() {
//   console.log("hopDone");
//   document.querySelector("#blue_container").classList.remove("hop");
// }
