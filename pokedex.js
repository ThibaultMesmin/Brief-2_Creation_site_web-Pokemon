// essai API
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
    // console.log(data);
    console.log(data);
    // console.log(data.pokedexId[1]);
    for (let index = 0; index < data.length; index++) {
        let element = data[index].name;
        console.log(element);
        // let pokemonName = document.querySelector('#pokemonName');
        // pokemonName.textContent = element.name;
        // console.log(pokemonName);
    }
}

callApi();