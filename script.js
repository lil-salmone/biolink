const pulsante = document.getElementById('theme-toggle');
const corpo = document.body;
pulsante.addEventListener('click', () => {
corpo.classList.toggle('dark-mode');
if (corpo.classList.contains('dark-mode')) {
pulsante.innerText = "☀️ light mode";
} else {
pulsante.innerText = "🌙 dark mode";
}
});

document.getElementById('nomeForm').addEventListener('submit', function(e) {
const email = document.getElementById('campoEmail').value;
if (!email.includes('@')) {
e.preventDefault(); // Blocca l'invio se l'email è sbagliata
alert("Inserisci un indirizzo email valido!");
}
});

alert("⊹₊˚‧︵‿₊୨ welcome to my linktree! ୧₊‿︵‧˚₊⊹")
