window.addEventListener("load", start);

function start() {
    console.log("start");

    // tilføj falling på coin0,1,2,3 diamond, og bomb
    document.querySelector("#coin_container_0").classList.add("falling");
    document.querySelector("#coin_container_1").classList.add("falling");
    document.querySelector("#coin_container_2").classList.add("falling");
    document.querySelector("#coin_container_3").classList.add("falling");
    document.querySelector("#bomb_container").classList.add("falling");
    document.querySelector("#diamond_container").classList.add("falling");

    // så er der klasser på ... nu skal vi kunne klikke
    document.querySelector("#coin_container_0").addEventListener("click", clickCoin);
    document.querySelector("#coin_container_1").addEventListener("click", clickCoin);
    document.querySelector("#coin_container_2").addEventListener("click", clickCoin);
    document.querySelector("#coin_container_3").addEventListener("click", clickCoin);
    document.querySelector("#bomb_container").addEventListener("click", clickBomb);
    document.querySelector("#diamond_container").addEventListener("click", clickDiamond);
}


function clickCoin() {
    console.log("click coin");

    // Fjern mønten (sprite)
    this.querySelector(".coin_sprite").classList.add("dissappear");

    // TODO: Spil lyd til coin

    // TODO: Lav kode der tilfældigt vælger mellem kling og pling-lyd


    // Genstart denne mønt så den igen falder fra toppen ...
    this.addEventListener("animationend", coinGenstart);
}


function coinGenstart() {
    console.log("coinGenstart");

    this.removeEventListener("animationend", coinGenstart);

    // Fjern dissappear
    this.querySelector(".coin_sprite").classList.remove("dissappear");

    // Genstart falling
    this.classList.remove("falling");
    this.offsetHeight;
    this.classList.add("falling");

    // sørg for at man kan klikke på mønten igen
    this.addEventListener("click", clickCoin);
}


function clickDiamond() {
    console.log("clickDiamond");

    // TODO: Spil lyd for diamant
}

function clickBomb() {
    console.log("clickBomb");

    // TODO: Spil lyd for bombe

    // TODO: Når lyden er færdig -> gameOver
}

function gameOver() {
    console.log("Game Over");

    // TODO: sluk for event

    // TODO: spil gameover-lyd


    // pause alle animationer
    document.querySelector("#coin_container_0").classList.add("paused");
    document.querySelector("#coin_container_1").classList.add("paused");
    document.querySelector("#coin_container_2").classList.add("paused");
    document.querySelector("#coin_container_3").classList.add("paused");
    document.querySelector("#bomb_container").classList.add("paused");
    document.querySelector("#diamond_container").classList.add("paused");


    // fjern alle tænkelige eventlistnere
    document.querySelector("#coin_container_0").removeEventListener("click", clickCoin);
    document.querySelector("#coin_container_0").removeEventListener("animationend", coinGenstart);
    document.querySelector("#coin_container_1").removeEventListener("click", clickCoin);
    document.querySelector("#coin_container_1").removeEventListener("animationend", coinGenstart);
    document.querySelector("#coin_container_2").removeEventListener("click", clickCoin);
    document.querySelector("#coin_container_2").removeEventListener("animationend", coinGenstart);
    document.querySelector("#coin_container_3").removeEventListener("click", clickCoin);
    document.querySelector("#coin_container_3").removeEventListener("animationend", coinGenstart);
    document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
    document.querySelector("#diamond_container").removeEventListener("click", clickDiamond);

}
