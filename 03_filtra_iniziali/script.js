/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A";

// Dichiara la funzione qui.
function filterNamesByLetter(array, letter) {
  const arrayNamesLetter = [];
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    if (name[0] === letter) {
      arrayNamesLetter.push(name);
    }
  }

  return arrayNamesLetter;
}

//TODO Versione alternativa con arrow function
//* const filterNamesByletter = (array, letter) => {
//*   const arrayNamesLetter = [];
//*   for (let i = 0; i < array.length; i++) {
//*     const name = array[i];
//*     if (name[0] === letter) {
//*       arrayNamesLetter.push(name);
//*     }
//*   }

//*   return arrayNamesLetter;
//* };

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = filterNamesByLetter(names, letter);
console.log(filteredNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
