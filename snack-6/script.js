/* richiesta numero utente */
var numero_utente = parseInt(prompt("Inserisci un numero da 1 a 10"));

/* var per la somma */
var totale = 0;

/* creo un ciclo per i cubi usando Math.pow()*/
for(var i = 1; i <= numero_utente; i++){
  totale += Math.pow(i, 3);
}

/* stampa */
console.log(totale)