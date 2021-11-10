export function getActive(playerPokemon) {
    // this can be simplified using a .find
    // playerPokemon.find(poke => poke.active)
    
    const poke0 = playerPokemon[0];
    const poke1 = playerPokemon[1];
    const poke2 = playerPokemon[2];
    

    if (poke0.active === true) {
        return poke0;
    } else 
    if (poke1.active === true) {
        return poke1;
    } else 
    if (poke2.active === true) {
        return poke2;
    }
}
