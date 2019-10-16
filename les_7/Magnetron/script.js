
function startMagnetron() {
    document.getElementById("deur").style.backgroundColor = "gold";
    document.getElementById("melding").innerHTML = "Gestart";
}

function stopMagnetron() {
    document.getElementById("deur").style.backgroundColor ="lightgrey";
    document.getElementById("melding").innerHTML = "00.00";

}

function setTijd(duur) {
    document.getElementById("melding").innerHTML = duur + ".00";

}