function isCompKO(pokemon, hp) { //changed comppokemon to compPokemon
    if (hp <= 0) {
        pokemon.ko = true;
        return true;
    } else {
        pokemon.ko = false;
        return false;
    }
}
export default isCompKO;

