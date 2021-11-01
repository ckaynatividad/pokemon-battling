import { pokeDex } from '../data/pokemon-data.js';

// NEEDS 'pokeDex' ARRAY IMPORT OR REPLACE 'pokeDex' W/ ARRAY NAME
export function generateComPokemon(){
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
    localStorage.setItem('POKEMON', JSON.stringify())
}

export function getpokeDex(){
    let pokeArrayString = localStorage.getItem('pokeDex') || '[]';
    const pokeArray = JSON.parse(pokeArrayString);

    return pokeArray;
}

export function isKO(userPokemon) { //changed userpokemon to userPokemon
    if (userPokemon.hp <= 0) {
        userPokemon.ko = true;
        return true;
    } else {
        userPokemon.ko = false;
        return false;
    }
    //return userPokemon.hp <= 0;
}
// ^^ TO ACCESS, MAY REQUIRE RENDER FOR LOOP AFTER USE IN APP.JS
export function isDead(userPokemon){
    for (let pokemon of userPokemon) {
        let koPokemon = 0;
        if (isKO(pokemon)) {
            koPokemon++;
        }
        if (koPokemon >= 3) {
            window.location.replace('../endGame');
        }
    } 
    //return userPokemon === 0;
}

export function generatePokemon() {
    let rando1 = Math.floor(Math.random() * pokeDex.length);
    let rando2 = Math.floor(Math.random() * pokeDex.length);
    let rando3 = Math.floor(Math.random() * pokeDex.length);
    let rando4 = Math.floor(Math.random() * pokeDex.length);
    let rando5 = Math.floor(Math.random() * pokeDex.length);
    let rando6 = Math.floor(Math.random() * pokeDex.length);

    while (
        rando1 === rando2 ||
        rando1 === rando3 ||
        rando1 === rando4 ||
        rando1 === rando5 ||
        rando1 === rando6 ||
        rando2 === rando3 ||
        rando2 === rando4 ||
        rando2 === rando5 ||
        rando2 === rando6 ||
        rando3 === rando4 ||
        rando3 === rando5 ||
        rando3 === rando6 ||
        rando4 === rando5 ||
        rando4 === rando6 ||
        rando5 === rando6 

    ) {
        rando1 = Math.floor(Math.random() * pokeDex.length);
        rando2 = Math.floor(Math.random() * pokeDex.length);
        rando3 = Math.floor(Math.random() * pokeDex.length);
        rando4 = Math.floor(Math.random() * pokeDex.length);
        rando5 = Math.floor(Math.random() * pokeDex.length);
        rando6 = Math.floor(Math.random() * pokeDex.length);
    }
    
    
    
    let poke1 = pokeDex[rando1];
    let poke2 = pokeDex[rando2];
    let poke3 = pokeDex[rando3];
    let poke4 = pokeDex[rando4];
    let poke5 = pokeDex[rando5];
    let poke6 = pokeDex[rando6];
    console.log(poke1);

    const pokeimg1 = document.getElementById('poke1-img');
    const pokeimg2 = document.getElementById('poke2-img');
    const pokeimg3 = document.getElementById('poke3-img');
    const pokeimg4 = document.getElementById('poke4-img');
    const pokeimg5 = document.getElementById('poke5-img');
    const pokeimg6 = document.getElementById('poke6-img');

    pokeimg1.src = poke1.img;
    pokeimg2.src = poke2.img;
    pokeimg3.src = poke3.img;
    pokeimg4.src = poke4.img;
    pokeimg5.src = poke5.img;
    pokeimg6.src = poke6.img;
    
    const pokename1 = document.getElementById('poke1-name');
    const pokename2 = document.getElementById('poke2-name');
    const pokename3 = document.getElementById('poke3-name');
    const pokename4 = document.getElementById('poke4-name');
    const pokename5 = document.getElementById('poke5-name');
    const pokename6 = document.getElementById('poke6-name');

    pokename1.textContent = poke1.name;
    pokename2.textContent = poke2.name;
    pokename3.textContent = poke3.name;
    pokename4.textContent = poke4.name;
    pokename5.textContent = poke5.name;
    pokename6.textContent = poke6.name;

}

   
    
