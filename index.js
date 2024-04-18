const counterDisplay = document.querySelector("h3"); // Sélectionne le premier élément h3 dans le document et le stocke dans counterDisplay.
let counter = 0; // Initialise un compteur à 0. Ce compteur augmentera à chaque fois qu'une bulle est cliquée.


const bubbleMaker = () => {
    const bubble = document.createElement("span");//Crée un nouvel élément span
    bubble.classList.add("bubble"); //Ajoute la classe "bubble" à l'élément, 
    document.body.appendChild(bubble);// Ajoute la bulle au corps du document.

    const size = Math.random() * 200 + 100 + "px";  // Génère une taille aléatoire pour la bulle, entre 100px et 300px.
        // Applique la taille générée à la hauteur et à la largeur de la bulle.
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";    // Positionne la bulle à un endroit aléatoire sur l'écran en hauteur (top).
    bubble.style.left = Math.random() * 100 + "%";    // Positionne la bulle à un endroit aléatoire sur l'écran en largeur (left).

    const plusMinus = Math.random() > 0.5 ? 1 : -1;    // Génère aléatoirement un signe positif ou négatif.
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");    // Définit une propriété CSS personnalisée pour l'animation de la bulle.

    bubble.addEventListener("click", () => {    // Ajoute un écouteur d'événements pour gérer les clics sur la bulle.
        counter++;        // Incrémente le compteur lorsque la bulle est cliquée.
        counterDisplay.textContent = counter;        // Met à jour le texte de counterDisplay avec la nouvelle valeur du compteur.
        bubble.remove();        // Supprime la bulle du document.
    })

    setTimeout(() => {
        bubble.remove();
    }, 8000);    // Définit un délai pour supprimer la bulle automatiquement après 8 secondes.

};

setInterval(bubbleMaker, 300);// Appelle la fonction bubbleMaker toutes les 300 millisecondes pour créer de nouvelles bulles.
