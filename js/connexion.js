// Récupérer le formulaire
const formulaireConnexion = document.querySelector("#login-form");

// Récupérer la zone de message
const messageConnexion = document.querySelector("#login-message");

// Écouter l'envoi du formulaire
formulaireConnexion.addEventListener("submit", function (event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // Afficher un message
    messageConnexion.textContent =
        "La connexion sera disponible après la mise en place des comptes.";

    messageConnexion.style.color = "#2563eb";

});