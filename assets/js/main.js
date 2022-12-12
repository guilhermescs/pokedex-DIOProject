
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class"number">#001</span>
            <span class"name">${pokemon.name}</span>

            <div class="detail">
                <ol class=types">
                    <li class="type">grass</li>
                    <li class="type">grass</li>
                </ol>

                <img src""
                    alt="${pokemon.name}">
            </div>
        </li>
    `   
}


const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})
