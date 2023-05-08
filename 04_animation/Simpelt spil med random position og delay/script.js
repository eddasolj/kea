window.addEventListener("load", sidenVises);

// opretter variabel

// opretter konstanter
const red1 = document.querySelector("#red_container1");
const blue1 = document.querySelector("#blue_container1");

function sidenVises() {
  console.log("sidenVises");
  startSpil();
}

function startSpil() {
  console.log("startSpil");

  // Laver et nyt random tal, og giver en random position til container og start flyv-animationer på alle elementer
  red1.classList.add("pos" + nytRandomTal(9), "flyv", "delay" + nytRandomTal(4));
  //Lyt efter flyv-animationer er færdig
  red1.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik på alle elementer
  red1.addEventListener("mousedown", clickRed);

  // Laver et nyt random tal, og giver en random position til container og start flyv-animationer på alle elementer
  blue1.classList.add("pos" + nytRandomTal(9), "flyv", "delay" + nytRandomTal(4));
  //Lyt efter flyv-animationer er færdig
  blue1.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik på alle elementer
  blue1.addEventListener("mousedown", clickBlue);
}

function clickRed() {
  console.log("clickRed");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  red1.removeEventListener("mousedown", clickRed);
  //frys (pause), flyv-animationen
  red1.classList.add("frys");
  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  red1.firstElementChild.classList.add("red_forsvind");
  //Lyt efter flyv-animationer er færdig
  red1.addEventListener("animationend", genstartRed);
}

function genstartRed() {
  console.log("genstartRed");
  //ryd op, fjern alt er på container og sprite
  red1.classList = "";
  red1.firstElementChild.classList = "";
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  red1.offsetLeft;
  //Giv en tilfældig position til container og start flyv-animationer på element
  red1.classList.add("pos" + nytRandomTal(9), "flyv");
  //Lyt efter klik på element
  red1.addEventListener("mousedown", clickRed);
}

function clickBlue() {
  console.log("clickBlue");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  blue1.removeEventListener("mousedown", clickRed);
  //frys (pause), flyv-animationen
  blue1.classList.add("frys");
  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  blue1.firstElementChild.classList.add("blue_forsvind");
  //Lyt efter flyv-animationer er færdig
  blue1.addEventListener("animationend", genstartBlue);
}

function genstartBlue() {
  console.log("genstartBlue");
  //ryd op, fjern alt er på container og sprite
  blue1.classList = "";
  blue1.firstElementChild.classList = "";
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  blue1.offsetLeft;
  //Giv en position til container og start flyv-animationer på element
  blue1.classList.add("pos" + nytRandomTal(9), "flyv");
  //Lyt efter klik på element
  blue1.addEventListener("mousedown", clickRed);
}

function nytRandomTal(max) {
  return Math.floor(Math.random() * max) + 1;
}
