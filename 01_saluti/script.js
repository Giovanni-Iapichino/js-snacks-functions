/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function saluta(name) {
  return `Ciao ${name}`;
}

// Versione alternativa con arrow function
// const saluta = name => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
saluta(userName);
console.log(saluta(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
