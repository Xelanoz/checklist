    function reset(event){
        event.preventDefault();
        document.getElementById("resultat").style.display = "none";
    }
    const nuit = document.getElementById("nuit").value;
    function myFunction(event) {
        event.preventDefault();
        var nuitbtn = document.getElementById("nuit").value;
        var climat = document.getElementById("climat").value;
        nuitbtn = nuit
    document.getElementById("resultat").style.display = "block";
    }
var climat = document.getElementById("climat").value;
var calculparnuit = Math.round(nuit/3);
if (calculparnuit = "0") {
    calculparnuit = "1";
}
document.getElementById("resultat").style.display = "none";


var envoyer = document.getElementById("envoyer");
var chaussure = ""

var pulletpantalon = "";

if (nuit > 6){
    chaussure = "1"
} else {
    chaussure = "0"
}

if (nuit < 4){
    pulletpantalon = "1"
} else if (nuit > 6){
    pulletpantalon = "3"
} else {
    pulletpantalon = "2"
}

var items0 = document.getElementById("items0");
items0.textContent = "Voilà ce que vous devez prendre pour être bien pour " + nuit + " nuits :";
if(nuit > 10) {
    nuit = 10;
}
var items1 = document.getElementById("items1");
            items1.textContent = "Un sac à dos ou une valise";
var items2 = document.getElementById("items2");
            items2.textContent = nuit + " paires de chausettes";
var items3 = document.getElementById("items3");
            items3.textContent = nuit + " sous-vêtements";
var items4 = document.getElementById("items4");
            items4.textContent = pulletpantalon + "pantalon";
var items5 = document.getElementById("items5");
            items5.textContent = nuit + " t-shirts";
var items6 = document.getElementById("items6");
            items6.textContent = pulletpantalon + " pull";
var items7 = document.getElementById("items7");
if (climat != "chaud"){
            items7.textContent = "1 veste";
} else {document.getElementById("veste").style.display = "none";}
var items8 = document.getElementById("items8");
            items8.textContent = chaussure + " paire de chaussures";
var items9 = document.getElementById("items9");
if (climat == "froid"){
    items9.textContent = "gants et bonnet";
} else {document.getElementById("gant").style.display = "none";}

var items10 = document.getElementById("items10");
if (climat == "chaud"){
    items10.textContent = "tong/claquettes";
} else {document.getElementById("tong").style.display = "none";}














