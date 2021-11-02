import { getPokemon, generateComPokemon } from '../functions/utils.js';
import { pokeDex } from '../data/pokemon-data.js';

const move1 = document.getElementById('move1');
const move2 = document.getElementById('move2');
const move3 = document.getElementById('move3');
const move4 = document.getElementById('move4');
const switchButton = document.getElementById('switch');
const submit = document.getElementById('submit');
const compHP = document.getElementById('comp-hp');
const compImage = document.getElementById('comp-image');
const playerHP = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');

const playerPokemon = getPokemon();

const computerPokemon = generateComPokemon();

console.log(computerPokemon);

//player pokemon data
playerHP.textContent = playerPokemon[0].baseStats.hp;
playerImage.src = `../${playerPokemon[0].img}`;

//const active = {}

//radio buttons
move1.textContent = playerPokemon[0].moves[0];
move2.textContent = playerPokemon[0].moves[1];
move3.textContent = playerPokemon[0].moves[2];
move4.textContent = playerPokemon[0].moves[3];

//computer pokemon data
compHP.textContent = computerPokemon[0].baseStats.hp;
compImage.src = `../${computerPokemon[0].img}`;

//turn - start on click 'submit'
//if isDead(player) === true || isDead(comp)) === true
//turn++
//check speed/priority
//if isDead(player) === true || isDead(comp)) === true
    //game over
//else
    //if playerSpeed >
        //player turn
        //check move
            //damage()
            //STAB - if we do
            //if effective (damage * effectiveValue)
            //save new health
            //if isDead(player) === true || isDead(comp)) === true
            //if isKO() === true - switch pokemon
    //else
        //computer turn
        //random assign move
            //damage()
            //STAB (maybe)
            //save new health
            //if isDead(player) === true || isDead(comp)) === true
            //if isCompKO() === true - switch pokemon
