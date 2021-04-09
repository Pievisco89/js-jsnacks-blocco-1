var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");

if(parola1 > parola2){
  console.log(parola1);
  console.log(parola2);
}else if(parola1 === parola2){
  console.log("Le parole sono lunghe uguali");
}else{
  console.log(parola2);
  console.log(parola1);
}