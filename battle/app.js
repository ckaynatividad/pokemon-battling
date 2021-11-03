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



// let computerPokemon = [];
// computerPokemon1.forEach((Object)=>{
//     computerPokemon.push({
//         num: Object.num,
//         name: Object.name,
//         types: Object.types,
//         moves: Object.moves, 
//         baseStats: { hp: baseStat(Object.baseStats.hp), atk: baseStat(Object.baseStats.atk), def: baseStat(Object.baseStats.def), spa: baseStat(Object.baseStats.spa), spd: baseStat(Object.baseStats.spd), spe: baseStat(Object.baseStats.spe) },
//         img: Object.img
//     });
// });


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
playerPokemon[0].active = true;
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

computerPokemon1[0].active = true;
//computer pokemon data
const activeComp1 = getActive(computerPokemon1);
console.log(activeComp1);
const computerPokemon = {
    num: activeComp1.num,
    name: activeComp1.name,
    types: activeComp1.types,
    moves: activeComp1.moves, 
    baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
    img: activeComp1.img
};
compHP.textContent = computerPokemon.baseStats.hp;
compImage.src = `../${computerPokemon.img}`;

let compStats = {
    hp: computerPokemon.baseStats.hp,
    atk: computerPokemon.baseStats.atk,
    def: computerPokemon.baseStats.def,
    spa: computerPokemon.baseStats.spa,
    spd: computerPokemon.baseStats.spd,
    spe: computerPokemon.baseStats.spe
};

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
const maxHealth = playerStats.hp;
console.log(playerStats.spe);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedMoveRadio = document.querySelector('input[type=radio]:checked');
    turn++;
    let randomNumber = Math.floor(Math.random() * 3);
    let computerMove = computerPokemon.moves[randomNumber];
    // let compMoveData = moves[computerMove];
    if (selectedMoveRadio.id === 'switch') {
        console.log('switch button pressed');
    } else {
        const selectedMove = selectedMoveRadio.value;
        const moveData = moves[selectedMove];
        if (moveData.priority > computerMove.priority){
            if (moveData.category === 'Physical') {
                let hello = damage(playerStats.atk, compStats.def, compStats.hp);
                console.log(hello);
            } else {
                let hello1 = damage(playerStats.spa, compStats.spd, compStats.hp);
                console.log(hello1);
            } 
        } else if (computerMove.priority > moveData.priority) {
            if (computerMove.category === 'Physical') {
                let hello2 = damage(compStats.atk, playerStats.def, playerStats.hp);
                console.log(hello2);
            } else {
                let hello3 = damage(compStats.spa, playerStats.spd, playerStats.hp);
                console.log(hello3);
            }
        } else {
            if (playerStats.spe > compStats.spe) {
                if (moveData.category === 'Physical') {
                    let hello = damage(playerStats.atk, compStats.def, compStats.hp);
                    console.log(hello);
                } else {
                    let hello1 = damage(playerStats.spa, compStats.spd, compStats.hp);
                    console.log(hello1);
                }
            } else if (computerMove.category === 'Physical') {
                let hello2 = damage(compStats.atk, playerStats.def, playerStats.hp);
                console.log(hello2);
            } else {
                let hello3 = damage(compStats.spa, playerStats.spd, playerStats.hp);
                console.log(hello3);
                console.log('noodles');
        
            }
        }

    }
});


