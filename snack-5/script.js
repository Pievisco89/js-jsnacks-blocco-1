/* creo array vuoto */
var numeri = [];

/* chiedere 6 volte all' utente di inserire un numero */
for(var i=0; i < 6; i++){
  var richiesta_numeri = parseInt(prompt("Inserisci un numero"));
  if(richiesta_numeri % 2 !=0){
    numeri.push(richiesta_numeri)
  }  
}

/* stampa */
console.log(numeri)