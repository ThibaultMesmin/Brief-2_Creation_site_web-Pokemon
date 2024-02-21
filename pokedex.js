
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
    for (let index = 0; index < 151; index++) {
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