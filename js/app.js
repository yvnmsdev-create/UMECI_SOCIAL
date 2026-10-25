// 1. Récupérer les éléments HTML

const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");

const postContent = document.querySelector("#post-content");
const publishBtn = document.querySelector("#publish-btn");
const postsContainer = document.querySelector("#posts-container");
const formMessage = document.querySelector("#form-message");


// 2. Ouvrir et fermer le menu mobile

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// 3. Publier un message de démonstration

publishBtn.addEventListener("click", function () {

    const message = postContent.value.trim();

    // Vérifier que le message n'est pas vide

    if (message === "") {
        formMessage.textContent = "Écris un message avant de publier.";
        return;
    }

    // Créer une carte de publication

    const post = document.createElement("article");
    post.classList.add("card", "post");

    const header = document.createElement("div");
    header.classList.add("post-header");

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = "ET";

    const author = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = "Étudiant de démonstration";

    const date = document.createElement("p");
    date.textContent = "À l'instant";

    author.append(name, date);
    header.append(avatar, author);

    const content = document.createElement("p");
    content.textContent = message;

    post.append(header, content);

    // Ajouter la publication au début du fil

    postsContainer.prepend(post);

    // Vider le formulaire

    postContent.value = "";
    formMessage.textContent = "Publication de démonstration ajoutée !";

});