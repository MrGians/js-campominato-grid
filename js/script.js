// TRACCIA
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Al click sulla cella, essa si colora di Rosso e ne viene stampato in console il numero corrispondente.

// # MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

// # MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS.
// Al click del bottone "Play" vengono generate 100 celle in 10 righe da 10 celle ciascuna.

// # MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

// # MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella di Rosso.

// # BONUS
// Aggiungere una select accanto al bottone "Play", che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



// Variabili Globali DOM
const playBtn = document.getElementById("btn-play");
const grid = document.getElementById("grid");


// Variabili di appoggio Griglia
const rows = 10;
const cells = 10;
const totalCells = rows * cells;


// Creo una funzione che si occupi di generare le Celle
const createCell = (cellNumber, gridContainer) => {

// Genero le celle tramite un ciclo FOR
for (let i = 1; i <= cellNumber; i++) {
  // Creo l'elemento Cella
  const cell = document.createElement("div");
  // Assegno la classe "cell"
  cell.classList.add("cell");
  // Inserisco un numero ad ogni cella
  cell.append(i);
  // Inserisco le celle nel DOM
  gridContainer.appendChild(cell);
}

}


// Creo le celle necessarie ed inserisco la destinazione tramite la Funzione "createCell"
createCell(totalCells, grid);


// Rendo visibile Griglia & Celle al click del bottone "Play"
playBtn.addEventListener("click", () => {
  // Rendo visibile la griglia
  grid.classList.remove("d-none");
});

