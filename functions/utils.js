

// NEEDS 'pokeDex' ARRAY IMPORT OR REPLACE 'pokeDex' W/ ARRAY NAME
export function generatePokemon(){
    let rando1 = Math.floor(Math.random() * pokeDex.length);
    let rando2 = Math.floor(Math.random() * pokeDex.length);
    let rando3 = Math.floor(Math.random() * pokeDex.length);

    while (
        rando1 === rando2 ||
        rando1 === rando3 ||
        rando2 === rando3 
    ) {
        rando1 = Math.floor(Math.random() * pokeDex.length);
        rando2 = Math.floor(Math.random() * pokeDex.length);
        rando3 = Math.floor(Math.random() * pokeDex.length);
    }
    let pokemon1 = pokeDex[rando1];
    // NEEDS POKEMON INPUTS AND VALUE ID'S FROM HTML HERE

    let pokemon2 = pokeDex[rando2];
    // NEEDS POKEMON INPUTS AND VALUE ID'S FROM HTML HERE

    let pokemon3 = pokeDex[rando3];
    // NEEDS POKEMON INPUTS AND VALUE ID'S FROM HTML HERE

    return [
        pokemon1,
        pokemon2,
        pokemon3
    ];
    // ^^ CALL POKE VIA ARRAY -- insert 'let userPokemon = generatePokemon()' in app.js => userPokemon[0] etc.
}

export function getPokemon(){
    const pokeString = localStorage.getItem('POKEMON') || '[]';
    const pokemon = JSON.parse(pokeString);
    return pokemon;
}

export function setPokemon(){
    localStorage.setItem('POKEMON', JSON.stringify()); //added missing semicolon
}

export function getPokeDex(){
    let pokeArrayString = localStorage.getItem('POKEDEX') || '[]';
    const pokeArray = JSON.parse(pokeArrayString);

    return pokeArray;
}
// ^^ TO ACCESS, MAY REQUIRE RENDER FOR LOOP AFTER USE IN APP.JS