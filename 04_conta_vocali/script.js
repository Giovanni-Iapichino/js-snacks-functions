/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowelsInString(str) {
  let countVowels = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      countVowels += 1;
    }
  }
  return countVowels;
}

//TODO Versione alternativa con arrow function
//* const countVowelsInStringArrow = (str) => {
//*   let countVowels = 0;
//*   for (let i = 0; i < str.length; i++) {
//*     const char = str[i].toLowerCase();
//*     if (
//*       char === "a" ||
//*       char === "e" ||
//*       char === "i" ||
//*       char === "o" ||
//*       char === "u"
//*     ) {
//*       countVowels += 1;
//*     }
//*   }
//*   return countVowels;
//* };

// Invoca la funzione qui e stampa il risultato in console
const result = countVowelsInString(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
