
// appel API Tyradex
let callApi = function() {
    let url = `https://tyradex.tech/api/v1/gen/1`;

    fetch(url).then((response) =>
    response.json().then((data) => {
        displayPokemon(data);
        addFormListener(data);
    })
    )
    .catch((error) => {
        console.error('error fetching data', error);
    })
}

function displayPokemon(data) {
    let menu = document.querySelector('.menuPokedex');
    menu.innerHTML = '';

    for (let index = 0; index < 50; index++) {
        const element = data[index];
        // console.log(element);

        let newDiv = document.createElement('div');
        let pokemonName = document.createElement('p');
        let category = document.createElement('p');

        pokemonName.textContent = element.name.fr;
        newDiv.appendChild(pokemonName);

        newDiv.classList.add('newDivPokedex');
        pokemonName.classList.add('pokedexName');
        
        let pokemonImage = document.createElement('img');
        pokemonImage.src = element.sprites.regular;
        newDiv.appendChild(pokemonImage);
        pokemonImage.classList.add('pokemonImage');

        category.textContent = element.category;
        newDiv.appendChild(category);

        category.classList.add('pokemonCategory');
        
        menu.appendChild(newDiv);

    }
}

function addFormListener(data) {

    let formPokedex = document.querySelector('#formPokedex');

    formPokedex.addEventListener("submit", e => { 
        e.preventDefault();

        // e.target = mon formulaire de mon html
        // new FormData = pour récupérer les données de mon formulaire
        // Object.fromEntries = transforme mon FormData en object lisible
        const {search} = Object.fromEntries(new FormData(e.target));
        let input = search;
        // console.log(input);
    
        // Filtrer les données pour trouver le Pokémon correspondant
        const matchingPokemons = data.filter((pokemon) => pokemon.name.fr.toLowerCase().includes(input));
        console.log("matching pokemon", matchingPokemons);

        // Si un pokemon correspondant est trouvé, affiche ses détails
        if (matchingPokemons) {
            displayPokemon(matchingPokemons);
            // console.log("pokemon trouvé : ", displaySinglePokemon(matchingPokemon));
        } else {
            // Si aucun pokemon ne correspond
            console.error("Aucun Pokémon trouvé pour l'input:", input);
        }
    })
}

callApi();