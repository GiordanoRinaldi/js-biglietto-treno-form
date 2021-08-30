//Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

var genera = document.getElementById("genera");


//creazione "envento" al click su genera
genera.addEventListener("click", 
function() {
    //creo var dei dati
    var nome = document.getElementById("nome");
    var km = parseInt(document.getElementById("km").value);
    var eta = document.getElementById("eta");
    //var del "biglietto"
    var nomepass = document.getElementById("nomepass");
    var costo = (document.getElementById("costo"));
    var prezzoTot = km * 0.21;
    //nome pass
    nomepass.innerHTML = nome.value;
    //prezzo biglietto + offerta
    if (eta.value == "minorenne"){
        etapass.innerHTML = "offerta giovani";
        costo.innerHTML = (prezzoTot / 100 * 80).toFixed(2);
    } else if (eta.value == "over"){
        etapass.innerHTML = "tariffa vecchi";
        costo.innerHTML = (prezzoTot / 100 * 60).toFixed(2);
    } else {
        etapass.innerHTML = "tariffa normale";
        costo.innerHTML = prezzoTot;
    }
    
});


var annulla = document.getElementById("annulla");


