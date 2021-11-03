import { getPokemon, generateComPokemon } from '../functions/utils.js';
import { moves } from '../data/pokemon-moves.js';
import { getActive } from '../functions/getActive.js';
import { baseStat } from '../functions/baseStat.js';
import { damage } from '../functions/damage.js';
import { pokeDex } from '../data/pokemon-data.js';

const move1 = document.getElementById('move1');
const move2 = document.getElementById('move2');
const move3 = document.getElementById('move3');
const move4 = document.getElementById('move4');
// const switchButton = document.getElementById('switch');
const submit = document.getElementById('submit');
const compHP = document.getElementById('comp-hp');
const compImage = document.getElementById('comp-image');
const playerHP = document.getElementById('player-hp');
const playerImage = document.getElementById('player-image');
const move1Span = document.getElementById('move-1-span');
const move2Span = document.getElementById('move-2-span');
const move3Span = document.getElementById('move-3-span');
const move4Span = document.getElementById('move-4-span');


const playerPokemon1 = getPokemon();
console.log(playerPokemon1);

const computerPokemon1 = generateComPokemon();

//player pokemon data
let playerPokemon = [];
playerPokemon1.forEach((Object)=>{
    playerPokemon.push({
        num: Object.num,
        name: Object.name,
        types: Object.types,
        moves: Object.moves, 
        baseStats: { hp: baseStat(Object.baseStats.hp), atk: baseStat(Object.baseStats.atk), def: baseStat(Object.baseStats.def), spa: baseStat(Object.baseStats.spa), spd: baseStat(Object.baseStats.spd), spe: baseStat(Object.baseStats.spe) },
        img: Object.img
    });
});



let computerPokemon = [];
computerPokemon1.forEach((Object)=>{
    computerPokemon.push({
        num: Object.num,
        name: Object.name,
        types: Object.types,
        moves: Object.moves, 
        baseStats: { hp: baseStat(Object.baseStats.hp), atk: baseStat(Object.baseStats.atk), def: baseStat(Object.baseStats.def), spa: baseStat(Object.baseStats.spa), spd: baseStat(Object.baseStats.spd), spe: baseStat(Object.baseStats.spe) },
        img: Object.img
    });
});

let compStats = [];
computerPokemon.forEach((Object)=>{
    compStats.push({
        hp: Object.baseStats.hp,
        atk: Object.baseStats.atk,
        def: Object.baseStats.def,
        spa: Object.baseStats.spa,
        spd: Object.baseStats.spd,
        spe: Object.baseStats.spe
    });
});
playerPokemon1[0].active = true;


// NEED TO WORK ON ACTIVE POKEMON BASE STATS
const activePokemon1 = getActive(playerPokemon1);
const activePokemon = {
    num: activePokemon1.num,
    name: activePokemon1.name,
    types: activePokemon1.types,
    moves: activePokemon1.moves, 
    baseStats: { hp: baseStat(activePokemon1.baseStats.hp), atk: baseStat(activePokemon1.baseStats.atk), def: baseStat(activePokemon1.baseStats.def), spa: baseStat(activePokemon1.baseStats.spa), spd: baseStat(activePokemon1.baseStats.spd), spe: baseStat(activePokemon1.baseStats.spe) },
    img: activePokemon1.img
};
activePokemon.active = true;
console.log(activePokemon);
playerHP.textContent = activePokemon.baseStats.hp;
playerImage.src = `../${activePokemon.img}`;

let playerStats = {
    hp: activePokemon.baseStats.hp,
    atk: activePokemon.baseStats.atk,
    def: activePokemon.baseStats.def,
    spa: activePokemon.baseStats.spa,
    spd: activePokemon.baseStats.spd,
    spe: activePokemon.baseStats.spe
};
console.log(playerStats);

//radio buttons
move1Span.textContent = activePokemon.moves[0];
move1.value = activePokemon.moves[0];
move2Span.textContent = activePokemon.moves[1];
move2.value = activePokemon.moves[1];
move3Span.textContent = activePokemon.moves[2];
move3.value = activePokemon.moves[2];
move4Span.textContent = activePokemon.moves[3];
move4.value = activePokemon.moves[3];

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

// const pokeForm = document.getElementById('move-select-form');
let turn = 0;
const maxHealth = activePokemon.baseStat.hp;
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedMoveRadio = document.querySelector('input[type=radio]:checked');
    turn++;
    let randomNumber = Math.floor(Math.random() * 3);
    let computerMove = computerPokemon[0].moves[randomNumber];
    console.log(activePokemon.baseStats);
    if (selectedMoveRadio.id === 'switch') {
        console.log('switch button pressed');
    } else {
        const selectedMove = selectedMoveRadio.value;
        const moveData = moves[selectedMove];
        //*FIX CONSOLE ERROR FOR .SPE
        if (moveData.priority > computerMove.priority){
            if (moveData.category === 'physical') {
                let hello = damage(activePokemon.baseStats.atk, computerPokemon.baseStats.def, computerPokemon.baseStats.hp);
                console.log(hello);
            } else {
                let hello1 = damage(activePokemon.baseStats.spa, computerPokemon.baseStats.spd, computerPokemon.baseStats.hp);
                console.log(hello1);
            } 
        } else if (computerMove.priority > moveData.priority) {
            if (computerMove.category === 'physical') {
                let hello2 = damage(computerPokemon.baseStats.atk, activePokemon.baseStats.def, activePokemon.baseStats.hp);
                console.log(hello2);
            } else {
                let hello3 = damage(computerPokemon.baseStats.spa, activePokemon.baseStats.spd, activePokemon.baseStats.hp);
                console.log(hello3);
            }
        } else {
            if (activePokemon.baseStats.spe > computerPokemon.baseStats.spe) {
                if (moveData.category === 'physical') {
                    let hello = damage(activePokemon.baseStats.atk, computerPokemon.baseStats.def, computerPokemon.baseStats.hp);
                    console.log(hello);
                } else {
                    let hello1 = damage(activePokemon.baseStats.spa, computerPokemon.baseStats.spd, computerPokemon.baseStats.hp);
                    console.log(hello1);
                }
            } else if (computerMove.category === 'physical') {
                let hello2 = damage(computerPokemon.baseStats.atk, activePokemon.baseStats.def, activePokemon.baseStats.hp);
                console.log(hello2);
            } else {
                let hello3 = damage(computerPokemon.baseStats.spa, activePokemon.baseStats.spd, activePokemon.baseStats.hp);
                console.log(hello3);
            }
        }

    }
});
=======
    }});

