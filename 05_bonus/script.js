/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function greeting(name) {
  const date = new Date();
  const hours = date.getHours();
  let greetingMessage = ``;
  if (hours <= 13) {
    greetingMessage = `Buongiorno ${name}`;
  } else if (hours <= 17) {
    greetingMessage = `Buon pomeriggio ${name}`;
  } else {
    greetingMessage = `Buonasera ${name}`;
  }

  return greetingMessage;
}

// Invoca la funzione qui e stampa il risultato in console
const result = greeting(name);
console.log(result);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
