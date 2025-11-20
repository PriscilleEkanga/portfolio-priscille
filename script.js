


// Typed Text effect
const typedText = ["Développeuse Full-Stack", "Web Designer", "Passionnée par le code"];
let typedIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typedSpan = document.querySelector('.typed');

function type() {
  if (!typedSpan) return;

  const fullText = typedText[typedIndex];

  // --- Correction ici ---
  if (!isDeleting && charIndex < fullText.length) { // Condition: charIndex DOIT être strictement inférieur à la longueur
    charIndex++; // Incrémenter D'ABORD, pour que substring(0, charIndex) couvre le caractère manquant
    typedSpan.textContent = fullText.substring(0, charIndex);
  } else if (isDeleting && charIndex >= 0) {
    charIndex--;
    typedSpan.textContent = fullText.substring(0, charIndex);
  }

  // Si charIndex atteint la longueur totale (mot complet affiché)
  if (charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(type, 1500); // pause avant suppression
    return;
  } else if (charIndex < 0 && isDeleting) { // Si charIndex est inférieur à 0 (mot complètement supprimé)
    isDeleting = false;
    typedIndex = (typedIndex + 1) % typedText.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}


document.addEventListener('DOMContentLoaded', () => {
  type();
});

//email
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_xyfoo7v', 'template_0ieb3cq', this) 
      .then(() => {
        alert("Message envoyé avec succès !");
        form.reset();
      }, (err) => {
        alert("Erreur : " + JSON.stringify(err));
      });
  });
});

//projets
const showMoreBtn = document.getElementById("show-more-btn");
const moreProjects = document.getElementById("more-projects");

showMoreBtn.addEventListener("click", () => {
  if (moreProjects.style.display === "none") {
    moreProjects.style.display = "grid"; // affichage des projets
    showMoreBtn.textContent = "Afficher moins"; // changer le texte du bouton
  } else {
    moreProjects.style.display = "none"; // cacher les projets
    showMoreBtn.textContent = "Afficher plus de projets";
  }
});

