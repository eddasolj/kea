window.addEventListener("load", init);

function init() {
  console.log("Siden vises");
  var jegImg = document.querySelector("#jeg");
  jegImg.addEventListener("click", showommig);
}

function showommig() {
  console.log("Billede vises");
  var ommigImg = document.querySelector("#ommig");
  ommigImg.style.display = "block";
  ommigImg.addEventListener("click", closeommig);
}

function closeommig() {
  console.log("Billede lukkes");
  var ommigImg = document.querySelector("#ommig");
  ommigImg.style.display = "none";
}
