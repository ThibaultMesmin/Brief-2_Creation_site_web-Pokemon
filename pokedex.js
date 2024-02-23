
// appel API Tyradex
let callApi = function() {
    let url = `https://tyradex.tech/api/v1/gen/1`;

    // fetch : récupère l'url d'accès à l'API et then (promesse) : si fetch ok, récupère les données de l'API
    fetch(url).then((response) =>
    //response.json : lit jusqu'à la fin les données et si ok, promesse then qui appelle mes fonctions
    response.json().then((data) => {
        displayPokemon(data);
        addFormListener(data);
    })
    )
    // gestion d'erreur : si le fetch n'a pas fonctionné, affiche message d'erreur en console
    .catch((error) => {
        console.error('error fetching data', error);
    })
}

// affiche la liste des données récupérées de l'API
function displayPokemon(data) {
    // récupère la div .menuPokedex de l'HTML
    let menu = document.querySelector('.menuPokedex');
    // ma div est vide au départ
    menu.innerHTML = '';

    // boucle for sur mes données de l'API pour afficher au chargement de la page un nombre en particulier de pokemon
    for (let index = 0; index < 151; index++) {
        const element = data[index];
        // console.log(element);

        // je crée de nouveau élément à ajouter au DOM
        let newDiv = document.createElement('div');
        let pokemonName = document.createElement('p');
        let pokemonImage = document.createElement('img');
        let category = document.createElement('p');

        // j'ajoute aux éléments des données particulières de mon tableau data (données de l'API)
        pokemonName.textContent = element.name.fr;
        pokemonImage.src = element.sprites.regular;
        category.textContent = element.category;

        // j'ajoute mes éléments à une div
        newDiv.appendChild(pokemonName);
        newDiv.appendChild(pokemonImage);
        newDiv.appendChild(category);

        // j'ajoute des class à mes éléments pour gérer le design (css)
        newDiv.classList.add('newDivPokedex');
        pokemonName.classList.add('pokedexName');
        pokemonImage.classList.add('pokemonImage');
        category.classList.add('pokemonCategory');
        
        // j'ajoute ma nouvelle div contenant mes autres éléments à celle récupérée de l'HTML
        menu.appendChild(newDiv);
    }
}

// function qui gère ma searchbar
function addFormListener(data) {

    // je récupère mon form de l'HTML
    let formPokedex = document.querySelector('#formPokedex');

    // j'ajoute un écouteur d'event sur mon form
    formPokedex.addEventListener("submit", e => { 
        // au submit du form (clic bouton recherché ou touche entrée), je lui enlève son comportement par défaut de rafraîchir la page
        e.preventDefault();

        // Object.fromEntries = transforme mon FormData en object lisible
        // new FormData = pour récupérer les données de mon formulaire
        // e.target = le formulaire de mon html
        const {search} = Object.fromEntries(new FormData(e.target));

        // me permet de récupérer les données de l'input
        // retourne tout en miniscules et enlève les blancs en début et fin de string
        let input = search.toLowerCase().trim();
    
        // filtre les données pour trouver le Pokémon correspondant aux données rentrées dans l'input
        const matchingPokemons = data.filter((pokemon) => pokemon.name.fr.toLowerCase().includes(input));

        // console.log("matching pokemon", matchingPokemons);

        // si un pokemon correspondant est trouvé, appel la function displayPokemon pour afficher les éléments correspondants
        if (matchingPokemons) {
            displayPokemon(matchingPokemons);
        } else {
            // si aucun pokemon ne correspond
            console.error("Aucun Pokémon trouvé pour l'input:", input);
        }
    })
}

callApi();