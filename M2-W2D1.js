//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
let numero1 = 89
let numero2 = 65

if (numero1 > numero2) {
  console.log(numero1, "è più grande di", numero2);
} else if (numero1 === numero2) {
  console.log("i numeri", numero1, "e", numero2, "sono uguali");
} else {
  console.log(numero2, "è più grande di", numero1);
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2")
let x = 17

if (x < 5) {
  console.log("Tiny");
} else if (x < 10) {
  console.log("Small");
} else if (x < 15) {
  console.log("Medium");
} else if (x < 20) {
  console.log("Large");
} else if (x >= 20) {
  console.log("Huge");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
for (let i = 0; i <= 10; i++) {
  if ((i === 3) || (i === 8)) {
    continue;
  } else {
    console.log(i);
  }
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizo 4");

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "è pari")
  } else {
    console.log(i, "è dispari")
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio Extra 1");
let y = 2
let c = 10

if ((y === 8) && (c === 8)) {
  console.log("Sia y che c hanno valore 8");
} else if (y === 8) {
  if (c === 0) {
    console.log("Il valore di y e' uguale a 8, il valore di c e' uguale a 0")
    console.log("Quindi y+c=8 e y-c=8")
    console.log("!ATTENZIONE!: c-y= -8")
  } else {
    console.log("Il valore di y è uguale a 8!")
  }
} else if (c === 8) {
  if (y === 0) {
    console.log("Il valore di c e' uguale a 8, il valore di y e' uguale a 0")
    console.log("Quindi y+c=8 e c-y=8")
    console.log("!ATTENZIONE!: y-c= -8")
  } else {
    console.log("Il valore di c è uguale a 8!")
  }
} else if (y + c === 8) {
  console.log("L'addizione tra i due numeri ha valore 8!")
} else if (y - c === 8) {
  console.log("La sottrazione y-c ha valore 8!")
} else if (c - y === 8) {
  console.log("La sottrazione c-y ha valore 8!")
} else {
  console.log("Nessuno dei due numeri ha valore 8 e neanche la loro addizione o sottrazione ha valore 8!")
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Guarda esercizio extra 3
// let prodotto1 = 15.01
// let prodotto2 = 4.67
// let prodotto3 = 2.25
// let totalShoppingCart = prodotto1 + prodotto2 + prodotto3
// let spedizione = 10

// if (totalShoppingCart > 50) {
//   console.log("Prezzo totale: " + totalShoppingCart + "€");
//   console.log("Complimenti! Hai diritto alla spedizione gratuita!");
// } else {
//   console.log("Prezzo oggetti: " + totalShoppingCart + "€")
//   console.log("Prezzo spedizione: " + spedizione + "€")
//   console.log("Prezzo totale: " + (totalShoppingCart+spedizione) + "€")
//   console.log("Ti mancano " + parseFloat(50.01-totalShoppingCart).toFixed(2) + "€ per avere la spedizione gratuita!")
// }

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio Extra 2+3")

let isBlackFriday = true
let prodotto1 = 30.10
let prodotto2 = 10
let prodotto3 = 10
let totalShoppingCart = prodotto1 + prodotto2 + prodotto3
let spedizione = 10

if (isBlackFriday === true) {
  totalShoppingCart = totalShoppingCart * 80 / 100
  console.log("Oggi è il BlackFriday! Applicheremo uno sconto del 20% su ogni prodotto!")
}
if (totalShoppingCart > 50) {
  console.log("Prezzo totale: " + parseFloat(totalShoppingCart).toFixed(2) + "€");
  console.log("Complimenti! Hai diritto alla spedizione gratuita!");
} else {
  console.log("Prezzo oggetti: " + parseFloat(totalShoppingCart).toFixed(2) + "€")
  console.log("Prezzo spedizione: " + parseFloat(spedizione).toFixed(2) + "€")
  console.log("Prezzo totale: " + parseFloat(totalShoppingCart + spedizione).toFixed(2) + "€")
  console.log("Ti mancano " + parseFloat(50.01 - totalShoppingCart).toFixed(2) + "€ per avere la spedizione gratuita!")
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio Extra 5")

let isMale = false
let gender = isMale ? "maschio" : "femmina"

console.log("L'utente è " + gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
console.log("Esercizio Extra 5")

for (i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}