import { getActive } from './getActive.js';

export function switchPokemon(pokemon, allPokemon) {
    const activePokemon = getActive(allPokemon);
    activePokemon.active = false;
    const newPokemon = pokemon;
    newPokemon.active = true;
}
