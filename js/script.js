//Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

var biglietto = document.getElementById("biglietto");

var genera = document.getElementById("genera");


//creazione "envento" al click su genera
genera.addEventListener("click", 
function() { 
    //creo var dei dati
    var nome = document.getElementById("nome").value;
    var km = parseInt(document.getElementById("km").value);
    var eta = document.getElementById("eta").value;
    //var del "biglietto"
    var nomepass = document.getElementById("nomepass");
    var costo = (document.getElementById("costo"));
    var prezzoTot = km * 0.21;
    //nome pass
    nomepass.innerHTML = nome;
    //prezzo biglietto + offerta
    if (eta == "minorenne"){
        etapass.innerHTML = "Promo giovani";
        costo.innerHTML = (prezzoTot / 100 * 80).toFixed(2) + " &euro;";
    } else if (eta == "over"){
        etapass.innerHTML = "Tariffa senior";
        costo.innerHTML = (prezzoTot / 100 * 60).toFixed(2) + " &euro;";
    } else {
        etapass.innerHTML = "Tariffa normale";
        costo.innerHTML = prezzoTot.toFixed(2) + " &euro;";
    }
    console.log(km)
    //carrozza
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 6) + 1;
    //codiceCP
    document.getElementById("codiceCP").innerHTML = Math.floor(Math.random() * 999) + 9000;

    
    biglietto.classList.add("show")
});


var annulla = document.getElementById("annulla");

annulla.addEventListener("click", 
function() {
    biglietto.classList.remove("show")


    document.getElementById("nome").value = " ";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "" ;


    
});


