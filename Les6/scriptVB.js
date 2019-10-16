
function veranderKleur() {
    kleur = document.getElementById("main").style.backgroundColor;
    if (kleur== "red") {
        document.getElementById("main").style.backgroundColor = "green";
    } else {
        document.getElementById("main").style.backgroundColor = "red";    
    }
    stoplicht();
}

function stoplicht() {
    var kleur = document.getElementById("main").style.backgroundColor;

    if (kleur == "red") {
        alert("stoppen");
    } else {
        alert("doorlopen");
    }

}
