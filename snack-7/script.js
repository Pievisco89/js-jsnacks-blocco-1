var limite = 1000;
var potenza = 1;
var cont_potenza = 1;

while(potenza < limite){
  console.log(potenza);
  potenza = Math.pow(2, cont_potenza);
  cont_potenza++;
}

/* Altra soluzione proposta da Stefano */
/* while(potenza < limite){
  console.log(potenza);
  potenza *= 2;
}
 */

