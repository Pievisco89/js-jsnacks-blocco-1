/* due prompt per parole */
var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");
console.log(parola1)
console.log(parola2)

/* valutare lunghezza parole - stampa */
if(parola1.length > parola2.length){
  console.log(parola2 + " " + parola1);
}else if(parola1.length === parola2.length){
  console.log("Le parole sono lunghe uguali");
}else{
  console.log(parola1 + " " + parola2);
}