
async function getPokemons(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return await response.json(response)
}

export default getPokemons
