window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
}

document.querySelector("#box_container1").addEventListener("click", container1ClickHandler);

function container1ClickHandler() {
  console.log("container1ClickHandler");
  document.querySelector("#box_sprite1").classList.remove("green");
  document.querySelector("#box_sprite1").classList.add("blue");
}

/// Når jeg klikker på den røde skifter den til grøn

document.querySelector("#box_container2").addEventListener("click", container2ClickHandler);

function container2ClickHandler() {
  console.log("container2ClickHandler");
  document.querySelector("#box_sprite1").classList.remove("green");
  document.querySelector("#box_sprite1").classList.add("blue");
  /// Gør så den hopper en gang ///
  document.querySelector("#box_container1").classList.add("hop");
  document.querySelector("#box_container1").addEventListener("animationend", hopDone);
}

function hopDone() {
  console.log("hopDone");
  document.querySelector("#box_container1").classList.remove("hop");
}
