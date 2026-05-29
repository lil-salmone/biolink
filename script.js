// 1. TOGGLE DARK MODE
const pulsante = document.getElementById('theme-toggle');
const corpo = document.body;

pulsante.addEventListener('click', () => {
  corpo.classList.toggle('dark-mode');
  
  if (corpo.classList.contains('dark-mode')) {
    pulsante.innerText = "☀️ light mode";
    localStorage.setItem('theme', 'dark');
  } else {
    pulsante.innerText = "🌙 dark mode";
    localStorage.setItem('theme', 'light');
  }
});

// Carica il tema salvato al caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    corpo.classList.add('dark-mode');
    pulsante.innerText = "☀️ light mode";
  } else {
    pulsante.innerText = "🌙 dark mode";
  }
});

// 2. VALIDAZIONE EMAIL NEL FORM
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    // Regex per validare email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      e.preventDefault();
      mostrarMessaggio('Inserisci un indirizzo email valido!', 'error');
      emailInput.focus();
      return false;
    }
    
    // Se è valido, mostra messaggio di successo
    e.preventDefault();
    mostrarMessaggio('✓ Messaggio inviato con successo!', 'success');
    form.reset();
  });
}

// 3. FUNZIONE PER MOSTRARE MESSAGGI
function mostrarMessaggio(testo, tipo) {
  let messaggioDiv = document.getElementById('feedback-message');
  
  if (!messaggioDiv) {
    messaggioDiv = document.createElement('div');
    messaggioDiv.id = 'feedback-message';
    form.appendChild(messaggioDiv);
  }
  
  messaggioDiv.textContent = testo;
  messaggioDiv.className = tipo;
  messaggioDiv.style.display = 'block';
  
  // Nascondi il messaggio dopo 3 secondi
  setTimeout(() => {
    messaggioDiv.style.display = 'none';
  }, 3000);
}

// 4. WELCOME MESSAGE
window.addEventListener('DOMContentLoaded', () => {
  console.log("⊹₊˚‧︵‿₊୨ welcome to my linktree! ୧₊‿︵‧˚₊⊹");
});
