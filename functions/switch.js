import { getActive } from './getActive.js';

export function switchPokemon(pokemon) {
    //pseudocode
    const activePokemon = getActive();
    activePokemon.active = false;
    const newPokemon = pokemon;
    newPokemon.active = true;
}
