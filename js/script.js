console.log('Js is ok')

//chiedo utente pari o dispari
const user = prompt('Inserisci pari o dispari');
console.log(user);
    
//chiedo a utente di inserire numero da 1 a 5
const number = parseInt(prompt('Inserisci numero da 1 a 5'));


    
// Genero un numero random per il Pc
let pc = parseInt(Math.random() * 5 + 1);
console.log(pc);
    

// Creo funzione Somma tra numero User e Numero Pc
function plusNumb(num1, num2) {
if (number <= 5){   const sum = num1 + num2;
    return sum;
    }
    return 'errore'

}
   

    

 
const total = plusNumb(number, pc);
console.log(total);

// Creo funzione che determina se pari o dispari   
function isOddOrEven(numb) {
    if (numb % 2 === 0){
        return 'pari'
    }

    return 'dispari';   
}
    
let  OddOrEven
if (!isNaN(total)) {
    OddOrEven = isOddOrEven(total);
    console.log(isOddOrEven(total));
}

if (number > pc) {
console.log('Vince utente')
} else console.log('Vince pC')


// Esercizio 2


let word = prompt('inserisci una parola')
let wordReverse = word.split("").reverse().join("");

if (word === wordReverse) {
  console.log('è palindroma');
} else {
  console.log('Non è palindroma');
}