export function getActive(playerPokemon) {
    playerPokemon.forEach(element => {
        if (element.active === true) {
            return element;
        }
    });
}