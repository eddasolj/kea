window.addEventListener("load", sidenVises);

/////////////////////   Global  /////////////////////////

// Opretter global variables
let points = 0;
let liv = 3;
let speed;
let myRand;

// Opretter global konstanter
const godting1 = document.querySelector("#godting_container1");
const darligting1 = document.querySelector("#darligting_container1");
const godting2 = document.querySelector("#godting_container2");
const darligting2 = document.querySelector("#darligting_container2");

////////////////////////// Begining  ////////////////////////////////

/////// Skærm, siden vises ///////

function sidenVises() {
  console.log("sidenVises");
  //Skjul andre skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#gameover").classList.add("hide");
  document.querySelector("#game_ui").classList.add("hide");
  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_kna
  document.querySelector("#start_knap").addEventListener("click", startGame);
}
/////// Skærm, start game  ///////

function startGame() {
  console.log(points);
  //console.log("startGame");
  //Skjul andre skærme
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#gameover").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_ui").classList.remove("hide");

  //reset liv til 3
  liv = 3;
  document.querySelector("#liv span").innerHTML = liv;

  //reset point til 0
  points = 0;
  document.querySelector("#point span").innerHTML = points;

  //reset speed
  speed = 1;

  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  /////// God og dårlig ting  ///////

  //Giv en random position, random delay til container og speed, start fald-animationer
  godting1.classList.add("pos" + ranNum(9), "delay" + ranNum(4), "speed" + speed, "fald");
  //Lyt efter op_ned-animationer er kørt en gang
  godting1.addEventListener("animationiteration", resetGodting);
  //Lyt efter klik
  godting1.addEventListener("mousedown", klikGodting);

  //Giv en random position, random delay til container og speed, start fald-animationer
  darligting1.classList.add("pos" + ranNum(9), "delay" + ranNum(4), "speed" + speed, "fald");
  //Lyt efter op_ned-animationer er kørt en gang
  darligting1.addEventListener("animationiteration", resetDarligting);
  //Lyt efter klik
  darligting1.addEventListener("mousedown", klikDarligting);

  //Giv en random position, random delay til container og speed, start fald-animationer
  godting2.classList.add("pos" + ranNum(9), "delay" + ranNum(4), "speed" + speed, "fald");
  //Lyt efter op_ned-animationer er kørt en gang
  godting2.addEventListener("animationiteration", resetGodting);
  //Lyt efter klik
  godting2.addEventListener("mousedown", klikGodting);

  //Giv en random position, random delay til container og speed, start fald-animationer
  darligting2.classList.add("pos" + ranNum(9), "delay" + ranNum(4), "speed" + speed, "fald");
  //Lyt efter op_ned-animationer er kørt en gang
  darligting2.addEventListener("animationiteration", resetDarligting);
  //Lyt efter klik
  darligting2.addEventListener("mousedown", klikDarligting);
}

///////////////////// Klik på god ting /////////////////////////

function klikGodting() {
  console.log("klikGodting");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", klikGodting);
  //frys (pause), fald-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", resetGodting);

  //Tæl en op på points og udskriv
  points++;
  console.log(points, this);
  document.querySelector("#point span").innerHTML = points;

  if (points >= 4) {
    speed = 3;
  } else if (points >= 2) {
    speed = 2;
  }

  // Sound
  document.querySelector("#sound_yummy").volume = 0.9;
  document.querySelector("#sound_yummy").currentTime = 0;
  document.querySelector("#sound_mmm").volume = 0.9;
  document.querySelector("#sound_mmm").currentTime = 0;

  if (Math.random() < 0.6) {
    document.querySelector("#sound_yummy").play();
  } else {
    document.querySelector("#sound_mmm").play();
  }
}

///////////////////// Reset red /////////////////////////

function resetGodting() {
  console.log("resetGodting");

  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;
  this.classList.add("pos" + ranNum(9), "delay" + ranNum(4), "speed" + speed, "fald");

  //Lyt efter klik på element
  this.addEventListener("mousedown", klikGodting);
}

///////////////////// Klik dårlig ting /////////////////////////

function klikDarligting() {
  console.log("klikDarligting");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", klikDarligting);

  //frys (pause), op_ned-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", resetDarligting);

  //Tæl en ned på liv og udskriv
  liv--;
  //console.log(liv);
  document.querySelector("#liv span").innerHTML = liv;
  if (liv <= 0) {
    //console.log("ikke flere liv");
    stopSpillet();
  }
  // Sound
  document.querySelector("#sound_uhg").volume = 0.9;
  document.querySelector("#sound_uhg").currentTime = 0;
  document.querySelector("#sound_uhg").play();
}

///////////////////// Genstart darligting /////////////////////////

function resetDarligting() {
  console.log("resetDarligting");

  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";
  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;
  //Giv en random position til container, speed og op_ned-animationer på element
  this.classList.add("pos" + ranNum(9), "delay" + ranNum(4), "speed" + speed, "fald");
  //Lyt efter klik på element
  this.addEventListener("mousedown", klikDarligting);
}

///////////////////// Stop spillet  /////////////////////////

function stopSpillet() {
  console.log("stopSpillet");

  //Timer
  document.querySelector("#time_sprite").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  //DarligTing
  darligting1.classList = "";
  darligting1.firstElementChild.classList = "";
  darligting1.removeEventListener("animationiteration", resetDarligting);
  darligting1.removeEventListener("mousedown", klikDarligting);
  darligting1.removeEventListener("animationend", resetDarligting);
  darligting2.classList = "";
  darligting2.firstElementChild.classList = "";
  darligting2.removeEventListener("animationiteration", resetDarligting);
  darligting2.removeEventListener("mousedown", klikDarligting);
  darligting2.removeEventListener("animationend", resetDarligting);

  //GodTing
  godting1.classList = "";
  godting1.firstElementChild.classList = "";
  godting1.removeEventListener("animationiteration", resetGodting);
  godting1.removeEventListener("mousedown", klikGodting);
  godting1.removeEventListener("animationend", resetGodting);
  godting2.classList = "";
  godting2.firstElementChild.classList = "";
  godting2.removeEventListener("animationiteration", resetGodting);
  godting2.removeEventListener("mousedown", klikGodting);
  godting2.removeEventListener("animationend", resetGodting);

  //Liv
  if (liv <= 0) {
    gameover();
  } else if (points >= 10) {
    levelComplete();
  } else {
    gameover();
  }
}
///////////////////// Game Over /////////////////////////

function gameover() {
  console.log("gameover");

  //Hide game UI elements
  document.querySelector("#game_ui").classList.add("hide");

  //Vis gameover skærm
  document.querySelector("#gameover").classList.remove("hide");
  document.querySelector("#game_over_points").textContent = "You lost and got only " + points + " point";

  //Klik på genstart1
  document.querySelector("#genstart1").addEventListener("click", startGame);
}
function levelComplete() {
  console.log("levelcomplete");

  //Hide game UI elements
  document.querySelector("#game_ui").classList.add("hide");

  //Vis levelComplete skærm
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#level_complete_points").textContent = "You won and got " + points + " points";

  //Klik på genstart2
  document.querySelector("#genstart2").addEventListener("click", startGame);
}

function ranNum(max) {
  return Math.floor(Math.random() * max) + 1;
}
