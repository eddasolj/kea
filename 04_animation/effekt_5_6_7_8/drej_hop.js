window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").classList.add("drej");
  document.querySelector("#red_container").addEventListener("animationiteration", drejEnIteration);
}
function drejEnIteration() {
  console.log("drejEnIteration");
  document.querySelector("#blue_container").classList.remove("hop");
  document.querySelector("#blue_container").offsetLeft;
  document.querySelector("#blue_container").classList.add("hop");
}
