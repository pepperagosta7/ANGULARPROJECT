"use strict";
const btn = document.getElementById("salutaBtn");
const messaggio = document.getElementById("messaggio");
btn.addEventListener("click", () => {
    messaggio.innerText = "Ciao, mondo!";
});
