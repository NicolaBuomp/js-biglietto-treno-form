/***************************
 * VENDITA BIGLIETTO TRENO
 ***************************/

/** 
 * REFERENZE ELEMENTI
 */
var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');
var acquisto = document.getElementById('all-date');
var acquistoCompletato = document.getElementById('acquistoCompletato');

/**
 * EVENTI
 */

// Generare il biglieto
bottoneGenera.addEventListener('click',
    function() {
        // Ottieni valori input utente
        var nome = document.getElementById('nome').value;
        //console.log(nome); 

        var kmDaPercorrere = document.getElementById('km').value;
        //console.log(kmDaPercorrere); 

        var fasciaEta = document.getElementById('fascia-eta').value;
        //console.log(fasciaEta); 

        // Calcolo biglietto
        var prezzoKm = 0.21;
        var costoBiglietto = prezzoKm * kmDaPercorrere;
        var offerta = 'Biglietto Standard';

        // Calcoliamo il costo e l'offerta applicata
        if (fasciaEta == 'minorenne') {
            // 20% sconto
            costoBiglietto -= costoBiglietto * 0.2;
            offerta = 'Sconto minorenne';
        } else if (fasciaEta == 'over65') {
            //40% sconto
            costoBiglietto -= costoBiglietto * 0.4;
            offerta = 'Sconto Over 65';
        }

        // Controllo dei decimali
        costoBiglietto = costoBiglietto.toFixed(2) + '€';

        // Numero random per la carrozza da 1 a 9
        var numCarrozza = Math.floor(Math.random() * 9) + 1;

        // Numero random per codice cp da 90000 a 100000
        var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000;

        // Inseriamo valori nella pagina
        document.getElementById('nome-passeggero').innerHTML = nome;
        document.getElementById('offerta-applicata').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = numCarrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('costo').innerHTML = costoBiglietto;

        // Mostra biglietto
        container.className = 'show';
    }
);

// Reset biglietto
bottoneAnnulla.addEventListener('click',
    function() {
        // Svuotiamo valori input utente
        var nome = document.getElementById('nome').value = "";
        //console.log(nome); 

        var kmDaPercorrere = document.getElementById('km').value = "";
        //console.log(kmDaPercorrere); 

        var fasciaEta = document.getElementById('fascia-eta').value = "minorenne";
        //console.log(fasciaEta);

        // Nascondi biglietto
        container.className = 'hidden';
    }
);

// completo acquisto
bottoneAcquista.addEventListener('click',
    function() {

        container.className = 'hidden';
        acquisto.className = 'hidden';
        acquistoCompletato.className = 'show';

    }
)