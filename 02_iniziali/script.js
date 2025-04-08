/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let initials = [];

// Dichiara la funzione qui.
function getInitials(namesList) {
  for (let i = 0; i < namesList.length; i++) {
    let currentName = namesList[i];
    if (currentName) {
      initials.push(currentName[0].toUpperCase());
    }
  }

  return initials;
}

// Versione alternativa con arrow function

// const getInitials = (namesList) => {
//   let initials = [];
//   for (let i = 0; i < namesList.length; i++) {
//     let currentName = namesList[i];
//     if (currentName) {
//       initials.push(currentName[0].toUpperCase());
//     }
//   }
//   return initials;
// };

// Invoca la funzione qui e stampa il risultato in console
getInitials(names);
console.log(initials);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
