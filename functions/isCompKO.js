// i feel that passing both the object as well as the variable hp
// which is ON the object makes this kind of unnecesarily confusing
// i would simplify to just pass the pokemon and get the hp inside the function

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

