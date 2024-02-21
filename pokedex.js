
// appel API Tyradex
let callApi = function(pokemon) {
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
    for (let index = 0; index < 10; index++) {
        const element = data[index];

        let menu = document.querySelector('.menu');
        let pokemonName = document.createElement('p');
        pokemonName.textContent = element.name.fr;
        menu.appendChild(pokemonName);
        pokemonName.classList.add('pokedex');

        let pokemonImage = document.createElement('img');
        pokemonImage.src = element.sprites.regular;
        menu.appendChild(pokemonImage);
        pokemonImage.classList.add('pokemonImage');
        
    }
    // let element = data[0];
    // console.log('element index 0 : ', element);
    // let pokemonName = document.querySelector('#pokemonName');
    // pokemonName.textContent = element.name.fr;

    // let div = document.querySelector('.pokedex');
    // let pokemonImage = document.createElement('img');
    // pokemonImage.src = element.sprites.regular;
    // div.appendChild(pokemonImage);
    // pokemonImage.classList.add('pokemonImage');
}

callApi();