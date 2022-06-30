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
const gridChoice = document.getElementById("grid-choice");


// Creo una funzione che si occupi di generare le Celle
const createCell = (cellNumber, gridContainer, hasNumberIn = false, isClickable = false, hasBGColorOnClick = false) => {

  // Genero le celle tramite un ciclo FOR
  for (let i = 1; i <= cellNumber; i++) {
    // Creo l'elemento Cella
    const cell = document.createElement("div");

    // Assegno la classe "cell-[option-value]" in base al numero di Rows * Cells
    if (cellNumber === 100) cell.classList.add("cell-easy");
    else if (cellNumber === 81) cell.classList.add("cell-classic");
    else if (cellNumber === 49) cell.classList.add("cell-hard");

    // Inserisco un numero ad ogni cella
    if (hasNumberIn) cell.append(i);
    // Aggiungo evento: al click della Cella stampa il numero cella in console
    if (isClickable) cell.addEventListener("click", (event) => console.log("Cell: " + event.target.innerText));
    // Aggiungo evento: al click della Cella le cambia il colore di sfondo
    if (hasBGColorOnClick) cell.addEventListener("click", (event) => cell.classList.toggle("clicked"));
    // Inserisco le celle nel DOM
    gridContainer.appendChild(cell);
  }
}



// Variabili di appoggio per la griglia (Globali)
let rows = 10;
let cells = 10;
let totalCells = rows * cells; // Default: Easy


// Creo evento sulla <select> per cambiare dinamicamente il numero di celle interne alla griglia
 gridChoice.addEventListener("change", (event) => {

    switch (event.target.value) {
      // Se viene selezionata l'opzione "Hardcore"
      case "hard":
        rows = 7;
        cells = 7;
        break;

      // Se viene selezionata l'opzione "Classic"
      case "classic":
        rows = 9;
        cells = 9;
        break;

      // Se viene selezionata l'opzione "Easy" (Default)
      case "easy":
        rows = 10;
        cells = 10;
        break;
    }

  // Determino il numero totale finale di Celle
  totalCells = rows * cells;
 })



// Renderizzo la griglia e creo elementi Cella al click del bottone "Play"
playBtn.addEventListener("click", () => {
  // Rendo visibile la griglia
  grid.classList.remove("d-none");

  // Resetto gli elementi <div> dentro alla griglia (Utilità dal secondo click di "play" in poi)
  grid.innerHTML = "";

  // Creo le celle necessarie tramite la Funzione "createCell" ed i relativi parametri
  createCell(totalCells, grid, true, true, true);
});
