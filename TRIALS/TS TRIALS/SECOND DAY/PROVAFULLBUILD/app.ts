const btn = document.getElementById("salutaBtn") as HTMLButtonElement;
const messaggio = document.getElementById("messaggio") as HTMLParagraphElement;

btn.addEventListener("click", () => {
    messaggio.innerText = "Ciao, mondo!";
});
