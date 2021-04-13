/* richiesta numero di 4 cifre all'utente */
var numero_utente = prompt("Inserisci un numero di 4 cifre");
console.log(numero_utente);

/* somma delle 4 cifre */
var somma = 0;

for(var i = 0; i < numero_utente.length; i++){
  var n = parseInt(numero_utente.charAt(i));
  somma += n;
}

console.log(somma);