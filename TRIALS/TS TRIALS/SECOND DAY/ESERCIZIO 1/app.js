"use strict";
// Recupera l'elemento input dalla pagina HTML
const inputElement = document.getElementById('testoInput');
// Recupera il pulsante dalla pagina HTML
const btnElement = document.getElementById('bottone');
// Recupera l'elemento paragrafo dove verrà mostrato il messaggio
const msgElement = document.getElementById('messaggio');
// Aggiunge un event listener al pulsante per gestire il click
btnElement.addEventListener('click', () => {
    // Ottiene il valore dell'input e rimuove eventuali spazi vuoti
    const inputValue = inputElement.value.trim();
    // Controlla se l'input non è vuoto
    if (inputValue) {
        // Mostra il messaggio con il testo inserito e imposta il colore del testo a nero
        msgElement.textContent = `Hai inserito: ${inputValue}`;
        msgElement.style.color = 'black';
    }
    else {
        // Mostra un messaggio di errore e imposta il colore del testo a rosso
        msgElement.textContent = "Errore: inserisci del testo";
        msgElement.style.color = "red";
    }
});
// Seleziona gli elementi del form
const formElement = document.getElementById('userForm');
const nomeElement = document.getElementById('nome');
const cognomeElement = document.getElementById('cognome');
const userDataElement = document.getElementById('userData');
// Aggiungi un event listener al form
formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene il comportamento predefinito del form
    const nome = nomeElement.value.trim();
    const cognome = cognomeElement.value.trim();
    if (nome && cognome) {
        userDataElement.textContent = `Nome: ${nome}, Cognome: ${cognome}`;
        userDataElement.style.color = 'black';
    }
    else {
        userDataElement.textContent = 'Errore: Compila tutti i campi!';
        userDataElement.style.color = 'red';
    }
    formElement.reset(); // Resetta i campi del form
});
