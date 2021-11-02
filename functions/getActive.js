export function getActive(playerPokemon) {
    for (let pokemon of playerPokemon) {
        if (pokemon.active === true) {
            return pokemon;
        }
    }
}
