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
    let pokemon2 = pokeDex[rando2];
    let pokemon3 = pokeDex[rando3];

    return [
        pokemon1,
        pokemon2,
        pokemon3
    ];
}

export function getPokemon(){
    const pokeString = localStorage.getItem('POKEMON') || '[]';
    const pokemon = JSON.parse(pokeString);
    return pokemon;
}

export function setPokemon(num){
    localStorage.setItem('POKEMON', JSON.stringify(num));
}

export function getpokeDex(){
    let pokeArrayString = localStorage.getItem('pokeDex') || '[]';
    const pokeArray = JSON.parse(pokeArrayString);

    return pokeArray;
}

export function isKO(userPokemon) {
    if (userPokemon.baseStats.hp <= 0) {
        userPokemon.ko = true;
        return true;
    } else {
        userPokemon.ko = false;
        return false;
    }
}

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

    const poke1input = document.getElementById('poke1');
    const poke2input = document.getElementById('poke2');
    const poke3input = document.getElementById('poke3');
    const poke4input = document.getElementById('poke4');
    const poke5input = document.getElementById('poke5');
    const poke6input = document.getElementById('poke6');

    poke1input.value = poke1.num;
    poke2input.value = poke2.num;
    poke3input.value = poke3.num;
    poke4input.value = poke4.num;
    poke5input.value = poke5.num;
    poke6input.value = poke6.num;
}
