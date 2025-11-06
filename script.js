// Personnalise ces valeurs directement si tu veux
document.getElementById('dateNow').textContent = new Date().toLocaleDateString();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Mode clair' : 'Mode sombre';
});

// Print (user can choisir "Enregistrer en PDF" dans la boîte d'impression)
const printBtn = document.getElementById('printBtn');
printBtn.addEventListener('click', () => {
  window.print();
});