console.log('Esercizio parole palindrome')



//ESERCIZIO
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


/*
// Chiedo all’utente di inserire una parola
const parolaInserita = prompt("Inserisci una parola:");
console.log(parolaInserita)

// Creo una funzione per controllare se la parola è palindroma
function èPalindroma(parola) {
  parola = parola.toLowerCase(); // Rendo tutto minuscolo per non avere differenze tra maiuscolo e minuscolo per avere una verifica più semplice


  for (let i = 0; i < parola.length / 2; i++) {    // Controllo le lettere dalla parte iniziale e finale della parola
    let primaLettera = parola[i];     // Prendo una lettera dall'inizio
    let ultimaLettera = parola[parola.length - 1 - i]; // Prendo la lettera dalla fine

    if (primaLettera !== ultimaLettera) {   // Se le due lettere sono diverse, non è palindroma
      return false;                 
    }
  }

  return true; // Se tutte le lettere combaciano allora è palindroma
}

// usando la funzione verifico se la parola è palindroma o no 
if (èPalindroma(parolaInserita)) {
  console.log("La parola è palindroma!");
} else {
  console.log("La parola non è palindroma.");
}
  */





//USANDO LA DOCUMENTAZIONE MDN

const parolaUtente = prompt("Inserisci una parola:");
console.log(parolaUtente)

// 2. Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
  // inverto la parola
  const parolaInvertita = parola.split('').reverse().join('');  // Prendo la parola la divido in singole lettere poi la inverto e poi la ricompongo in una nuova parola
  
  return parola === parolaInvertita; //verifico se combacia
}

// verifico la parola inserita dall'utente se è palindroma o no 
if (isPalindroma(parolaUtente)) {
  console.log("La parola è palindroma!");
} else {
  console.log("La parola NON è palindroma.");
}
