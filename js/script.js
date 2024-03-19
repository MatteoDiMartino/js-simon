// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let btn = document.querySelector('#genBtn');
console.log(btn)



let getRandom = getRandomNumberForTheGame ()
console.log(getRandom);

function getRandomNumberForTheGame (min, max) {
    let calcRandom = Math.floor(Math.random() * 10) + 1;
    return calcRandom
}