
// récupère plusieurs éléments du DOM
const showPopupButton = document.querySelector(".showPopup");
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById("closePopup");
const form = document.getElementById('form');

// ferme la popup au clic sur la croix
closePopupButton.addEventListener('click', closePopup);

// ferme la popup au clic à n'importe quel endroit de l'écran
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        closePopup();
    }
});

// au submit du formulaire :
form.addEventListener('submit', function (event) {
    // Empêche le comportement par défaut de l'envoi du formulaire (rechargement de la page)
    event.preventDefault();

    // appel cette fonction pour valider les inputs du formulaire
    if (validateForm()) {
        // si la validation réussit, appelez la fonction pour l'envoi asynchrone du formulaire
        submitFormAsync();
    }
});

// fonction pour l'envoi asynchrone du formulaire
function submitFormAsync() {
    // crée un nouvel objet FormData en utilisant le formulaire
    const formData = new FormData(form);

    // récupère le méthode Get donnée au form dans l'HTML
    const options = {
        method: form.method,
    };

    // fetch vers l'url donnée au form dans l'HTML (action="#" --> dans l'url de la page contact) avec la méthode
    fetch(form.action, options)
        .then(response => {
            // si la réponse est ok
            if (response.ok) {
                // affiche la popup et vide les inputs
                displayPopup();
                resetForm();
            // sinon affiche un message d'erreur dans la console
            } else {
                console.error('Erreur lors de la soumission du formulaire.');
            }
        })
        // si le fetch ne fonctionne pas, gestion d'erreur avec catch
        .catch(error => {
            console.error('Erreur lors de la soumission du formulaire:', error);
        });
}

// fonction qui affiche la popup
function displayPopup() {
    popup.style.display = "block";
}

// fonction qui ferme la popup
function closePopup() {
    popup.style.display = "none";
}

// fonction pour reset les inputs du formulaire
function resetForm() {
    form.reset();
}

// fonction pour valider les inputs du formulaire
function validateForm() {
    // récupère plusieurs élèments du DOM
    const userName = document.getElementById('nameContact').value;
    const userEmail = document.getElementById('emailContact').value;
    const userMessage = document.getElementById('msg').value;

    // validation du nom (ne doit contenir que des lettres)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(userName.trim())) {
        alert('Le nom ne doit contenir que des lettres.');
        return false;
    }

    // validation de l'email (regex de vérification d'email)
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    // .test permet de vérifier la correspondance entre les données de l'input email et celle du regex
    // .trim permet de retirer les blancs (espaces) en début et fin de string
    // ici, si l'email ne correspond pas au regex, renvoi une alert
        if (!emailRegex.test(userEmail.trim())) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return false;
    }

    // validation du message (autorise les lettres, chiffres, espaces, et certains caractères de ponctuation)
    const messageRegex = /^[a-zA-Z0-9\s.,!?']+$/;
    if (!messageRegex.test(userMessage.trim())) {
        alert('Le message contient des caractères non autorisés.');
        return false;
    }

    // si un des input est vide, affiche une alert
    if (userName.trim() === '' || userEmail.trim() === '' || userMessage.trim() === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
        return false;
    }

    return true;
}