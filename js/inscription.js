// Récupérer le formulaire
const formulaire = document.querySelector("#signup-form");

// Récupérer les champs
const motDePasse = document.querySelector("#motdepasse");
const confirmation = document.querySelector("#confirmation");

// Récupérer la zone de message
const message = document.querySelector("#signup-message");

// Écouter l'envoi du formulaire
formulaire.addEventListener("submit", function (event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // Vérifier les mots de passe
    if (motDePasse.value !== confirmation.value) {

        message.textContent = "Les deux mots de passe ne correspondent pas.";
        message.style.color = "red";

        return;
    }

    // Afficher un message de validation
    message.textContent =
        "Formulaire valide ! La création du compte sera disponible prochainement.";

    message.style.color = "green";

});