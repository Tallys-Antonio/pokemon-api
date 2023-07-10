import getPokemons from "./get-pokemons"

async function getListPokemon(numberLoad) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${numberLoad}`)
    const pokemon = await response.json(response)
    const pokemonListName = pokemon.results.map((pokemon) => {
      return pokemon.name
    })
    const pokemonList = pokemonListName.map(async (pokemons) => {
      return await getPokemons(pokemons)
    })
  
    return await Promise.all(pokemonList)
}

export default getListPokemon