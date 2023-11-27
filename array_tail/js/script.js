let arrey = [];
let number = prompt("quanti numeri devo generare?")
let arreyConsole = []
for(let i = 1; i <= number ; i++){
    let num = parseInt(Math.random()*100 + 1)
    console.log(num)
    arrey.push(num)
    if(i>number-4){
        arreyConsole.push(num)
    }
}

console.log(arreyConsole);
