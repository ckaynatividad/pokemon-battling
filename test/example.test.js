// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { pokeDex } from '../data/pokemon-data.js';
import findById from '../functions/findById.js';
import { setPokemon, getPokemon } from '../functions/utils.js';

const test = QUnit.test;

test('setPokemon should save chosen pokemon array', (expect) => {
    localStorage.removeItem('POKEMON');
    const chosenArray = [ 
        {
            num: 1,
            name: 'Venusaur',
            types: ['Grass', 'Poison'],
            moves: ['quickattack', 'gigadrain', 'weatherball', 'earthpower'],
            baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
            img: './data/pokeimg/venusaur.webp'
        },
    
        {
            num: 2,
            name: 'Charizard',
            types: ['Fire', 'Flying'],
            moves: ['roost', 'fireblast', 'hurricane', 'focusblast'],
            baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
            img: './data/pokeimg/charizard.webp'
        },
    ];

    setPokemon(chosenArray);
    
    const actual = JSON.parse(localStorage.getItem('POKEMON'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, chosenArray);
});

test('getPokemon should return pokemon from localStorage', (expect)=>{
    const chosenArray = [
        {
            num: 1,
            name: 'Venusaur',
            types: ['Grass', 'Poison'],
            moves: ['quickattack', 'gigadrain', 'weatherball', 'earthpower'],
            baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
            img: './data/pokeimg/venusaur.webp'
        },
    
        {
            num: 2,
            name: 'Charizard',
            types: ['Fire', 'Flying'],
            moves: ['roost', 'fireblast', 'hurricane', 'focusblast'],
            baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
            img: './data/pokeimg/charizard.webp'
        },
    ];

    setPokemon(chosenArray);
    const actual = getPokemon();

    expect.deepEqual(actual, chosenArray);
});

test('findById should return pokemon matching num', (expect)=>{
    const expected = {
        num: 1,
        name: 'Venusaur',
        types: ['Grass', 'Poison'],
        moves: ['quickattack', 'gigadrain', 'weatherball', 'earthpower'],
        baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
        img: './data/pokeimg/venusaur.webp'
    };

    const actual = findById(pokeDex, 1);
    expect.deepEqual(actual, expected);
});