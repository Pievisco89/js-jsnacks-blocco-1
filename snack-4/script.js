/* prompt nome utente e array invitati*/
var nome_utente = prompt("Come ti chiami?");
var nomi_invitati = [
  "Pietro",
  "Gatsby", 
  "Paolo", 
  "Leonardo", 
  "Claudio", 
  "Paola", 
  "Francesca", 
  "Giovanni", 
  "Aldo"
]

var nome;
var nome_entrata = false;

/* ciclo for per ricerca nome invitati */
for(var i=0; i<nomi_invitati.length; i++){
  var nome = nomi_invitati[i];
  if(nome === nome_utente){
    nome_entrata = true;
  }
}

/* stampa */
if(nome_entrata){
  console.log("Puoi entrare alla festa!")
}else{
  console.log("Non puoi entrare, non sei tra gli invitati!")
}