// gør et html element klikbar, og hopper til functionen clickHandler (click kan udskiftes til mousedown)
// Husk at oprette functionen som linje 7-11
document.querySelector("#id_fra_html").addEventListener("click", clickHandler);

// gør så man ikke kan klikke på elementet mere
document.querySelector("#id_fra_html").removeEventListener("click", clickHandler);

// tilføjer en class til html elementet
document.querySelector("#id_fra_html").classList.add("class_navn");

// fjener en class fra html elementet
document.querySelector("#id_fra_html").classList.remove("class_navn");

// fjener alle class's fra et html elementet
document.querySelector("#id_fra_html").classList = "";

// Lytter efter en animation er færdig, og klader functionen genstartElement
// Husk at oprette functionen som linje 7-11
document.querySelector("#id_fra_html").addEventListener("animationend", genstartElement);
