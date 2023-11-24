//dichiaro l'arrey frigo e la variabile frutto
let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ]
let frutto = "pesca"

//aggiungo ad arrey la variabile fruttpo
frigo.push(frutto)
console.log(frigo);

//dichiaro una variabile flag che utilizzero per dare veridicta al ciclo
//e richiedo tramite prompt l'inserimento del ingrediente
let flag = false
let ingrediente = prompt("che ingrediente ti manca?")
//creo un ciclo per verificare se una determinata stringa è presente nel arrey
for(i = 0 ; i < frigo.length ; i++){
    //struttura if per verificare la condizione
    if(ingrediente==frigo[i]){
        flag = true
    }
}
//struttura if per il messasggio di OUTPUT
if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.");
}
else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}