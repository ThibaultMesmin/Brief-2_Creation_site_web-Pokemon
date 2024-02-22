
// appel API Tyradex
let callApi = function() {
    let url = `https://tyradex.tech/api/v1/gen/1`;

    fetch(url).then((response) =>
    response.json().then((data) => {
        displayPokemon(data);
        // console.log('data', data);
    })
    )
    .catch((error) => {
        console.error('error fetching data', error);
    })
}

function displayPokemon(data) {
    for (let index = 0; index < 26; index++) {
        const element = data[index];
        // console.log(element);

        let menu = document.querySelector('.menuPokedex');
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

    // let formPokedex = document.querySelector('#formPokedex');
    // formPokedex.addEventListener("submit", e => e.preventDefault());

    let inputSearch = document.querySelector('#inputSearch');
    
    inputSearch.addEventListener('input', (e) => {

        let input = e.target.value.toLowerCase();
        // console.log(input);
    
        // Filtrer les données pour trouver le Pokémon correspondant
        const matchingPokemon = data.find((pokemon) => pokemon.name.fr.toLowerCase() === input);
        console.log("matching pokemon", matchingPokemon);

        // Si un pokemon correspondant est trouvé, affiche ses détails
        if (matchingPokemon) {
            // displayPokemon().style.display = 'none';
            displaySinglePokemon(matchingPokemon);
            // console.log("pokemon trouvé : ", displaySinglePokemon(matchingPokemon));
        } else {
            // Si aucun pokemon ne correspond
            console.error("Aucun Pokémon trouvé pour l'input:", input);
        }
    });
    
    function displaySinglePokemon(pokemon) {
    
        let soloCard = document.createElement('div');
        let soloPokemonName = document.createElement('p');
        soloPokemonName.textContent = pokemon.name.fr;
        soloCard.appendChild(soloPokemonName);
        console.log(soloPokemonName);
    
        let soloPokemonImage = document.createElement('img');
        soloPokemonImage.src = pokemon.sprites.regular;
        soloCard.appendChild(soloPokemonImage);
    
        soloCard.classList.add('newDivPokedex');
        soloPokemonName.classList.add('pokedexName');
        soloPokemonImage.classList.add('pokemonImage');
    }
}

callApi();