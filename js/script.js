const fetchPokemon = async (pokemon) => {

    const APIResponde = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(APIResponde);

}
fetchPokemon();