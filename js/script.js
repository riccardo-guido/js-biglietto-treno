let km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
let eta = parseInt(prompt("Quanti anni hai?"));


const prezzoPerKm = 0.21;


let prezzoBase = km * prezzoPerKm;


if (eta < 18) {
  // Sconto del 20% per i minorenni
  prezzoBase = prezzoBase * 0.80;
} else if (eta > 65) {
  // Sconto del 40% per gli over 65
  prezzoBase = prezzoBase * 0.60;
}


let prezzoFinale = prezzoBase.toFixed(2);


alert("Il prezzo finale del tuo viaggio è: € " + prezzoFinale);