function getPrijs() {
    document.getElementById("gewonnen").innerHTML = "je hebt gewonnen";
}

function verplaats() {

    var links = Math.floor(Math.random() * 1000) + "px";
    var top = Math.floor(Math.random() * 600) + "px";
    document.getElementById("knop").style.left = links;
    document.getElementById("knop").style.top = top;
    
}


