import { getPokemon, generateComPokemon, isKO } from '../functions/utils.js';
import { moves } from '../data/pokemon-moves.js';
import { getActive } from '../functions/getActive.js';
import { baseStat } from '../functions/baseStat.js';
import { damage, heals } from '../functions/damage.js';
import isCompKO from '../functions/isCompKO.js';
import findById from '../functions/findById.js';

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

playerPokemon1[0].active = true;


// NEED TO WORK ON ACTIVE POKEMON BASE STATS
const activePokemon1 = getActive(playerPokemon1);
let activePokemon = {
    num: activePokemon1.num,
    name: activePokemon1.name,
    types: activePokemon1.types,
    moves: activePokemon1.moves, 
    baseStats: { hp: baseStat(activePokemon1.baseStats.hp), atk: baseStat(activePokemon1.baseStats.atk), def: baseStat(activePokemon1.baseStats.def), spa: baseStat(activePokemon1.baseStats.spa), spd: baseStat(activePokemon1.baseStats.spd), spe: baseStat(activePokemon1.baseStats.spe) },
    img: activePokemon1.img
};
playerPokemon[0].active = true;
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
let activeComp1 = getActive(computerPokemon1);
let computerPokemon = {
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

// eslint-disable-next-line no-unused-vars
let koCount = 0;
// eslint-disable-next-line no-unused-vars
let turn = 0;
const maxHealth = playerStats.hp;
let currentHp = activePokemon.baseStats.hp;
let computerHp = compStats.hp;
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedMoveRadio = document.querySelector('input[type=radio]:checked');
    turn++;
    let isComputerKO = isCompKO(computerPokemon, computerHp);
    
    if (isComputerKO === true) {
        if (computerPokemon.num === computerPokemon1[0].num) {
            computerPokemon.active = false;
            computerPokemon = computerPokemon1[1];
            activeComp1 = computerPokemon1[1];
            computerPokemon = {
                num: activeComp1.num,
                name: activeComp1.name,
                types: activeComp1.types,
                moves: activeComp1.moves, 
                baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
                img: activeComp1.img
            };
            computerPokemon.active = true;
            computerHp = computerPokemon.baseStats.hp;
            compHP.textContent = computerPokemon.baseStats.hp;
            compImage.src = `../${computerPokemon.img}`;

            // eslint-disable-next-line no-unused-vars
            let compStats = {
                hp: computerPokemon.baseStats.hp,
                atk: computerPokemon.baseStats.atk,
                def: computerPokemon.baseStats.def,
                spa: computerPokemon.baseStats.spa,
                spd: computerPokemon.baseStats.spd,
                spe: computerPokemon.baseStats.spe
            };
        } else if (computerPokemon.num === computerPokemon1[1].num) {
            computerPokemon.active = false;
            computerPokemon = computerPokemon1[2];
            activeComp1 = computerPokemon1[2];
            computerPokemon = {
                num: activeComp1.num,
                name: activeComp1.name,
                types: activeComp1.types,
                moves: activeComp1.moves, 
                baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
                img: activeComp1.img
            };
            computerPokemon.active = true;
            computerHp = computerPokemon.baseStats.hp;
            compHP.textContent = computerPokemon.baseStats.hp;
            compImage.src = `../${computerPokemon.img}`;

            // eslint-disable-next-line no-unused-vars
            let compStats = {
                hp: computerPokemon.baseStats.hp,
                atk: computerPokemon.baseStats.atk,
                def: computerPokemon.baseStats.def,
                spa: computerPokemon.baseStats.spa,
                spd: computerPokemon.baseStats.spd,
                spe: computerPokemon.baseStats.spe
            };
        } else {
            localStorage.setItem('DIDWIN', JSON.stringify('true'));
            window.location.replace('../endGame/');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3);
    let compMove = computerPokemon.moves[randomNumber];
    let computerMove = moves[compMove];
    console.log(compMove);
    
    if (isKO(activePokemon) === true) {
        move1Span.classList.add('hidden');
        move2Span.classList.add('hidden');
        move3Span.classList.add('hidden');
        move4Span.classList.add('hidden');
    }

    if (selectedMoveRadio.id === 'switch') {

        const pokeSwitchRadio1 = document.getElementById('pokemon-1');
        const pokeSwitchRadio2 = document.getElementById('pokemon-2');
        const pokeSwitchRadio3 = document.getElementById('pokemon-3');
        const pokeSwitchSpan1 = document.getElementById('pokemon-1-span');
        const pokeSwitchSpan2 = document.getElementById('pokemon-2-span');
        const pokeSwitchSpan3 = document.getElementById('pokemon-3-span');
        const pokeSwitchForm = document.getElementById('pokemon-switch-form');
        const moveSelectForm = document.getElementById('move-select-form');
        const switchButton = document.getElementById('switch-button');

        pokeSwitchRadio1.value = playerPokemon[0].num;
        pokeSwitchRadio2.value = playerPokemon[1].num;
        pokeSwitchRadio3.value = playerPokemon[2].num;
        pokeSwitchSpan1.textContent = playerPokemon[0].name;
        pokeSwitchSpan2.textContent = playerPokemon[1].name;
        pokeSwitchSpan3.textContent = playerPokemon[2].name;
        pokeSwitchForm.classList.remove('hidden');
        moveSelectForm.classList.add('hidden');

        switchButton.addEventListener('click', (e) => {
            e.preventDefault();
            const test = document.querySelector('input[name="pokemon-switch"]:checked');
            
            activePokemon.active = false;
            const newActiveNum = test.value;
            const newActive = findById(playerPokemon, +newActiveNum);
            activePokemon = newActive;
            activePokemon.active = true;

            currentHp = activePokemon.baseStats.hp;

            playerHP.textContent = activePokemon.baseStats.hp;
            playerImage.src = `../${activePokemon.img}`;
            move1Span.textContent = activePokemon.moves[0];
            move1.value = activePokemon.moves[0];
            move2Span.textContent = activePokemon.moves[1];
            move2.value = activePokemon.moves[1];
            move3Span.textContent = activePokemon.moves[2];
            move3.value = activePokemon.moves[2];
            move4Span.textContent = activePokemon.moves[3];
            move4.value = activePokemon.moves[3];
            
            pokeSwitchForm.classList.add('hidden');
            moveSelectForm.classList.remove('hidden');
            
            move1Span.classList.remove('hidden');
            move2Span.classList.remove('hidden');
            move3Span.classList.remove('hidden');
            move4Span.classList.remove('hidden');
        });
    } else {
        const selectedMove = selectedMoveRadio.value;
        const moveData = moves[selectedMove];
    
        if (moveData.category === 'Physical') {
            //player does damage
            let playerMoveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower); 
            computerHp = computerHp - playerMoveDamage;
            compHP.textContent = computerHp;
            compStats.hp = computerHp;

            // if (isKO(computerPokemon) === true) {
            //     computerPokemon = computerPokemon1[1];
            if (computerMove.category === 'Physical') {
                let compMoveDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                currentHp = currentHp - compMoveDamage;
                playerHP.textContent = currentHp;
                playerStats.hp = currentHp;

            } else if (computerMove.category === 'Special') {
                let compMoveDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                currentHp = currentHp - compMoveDamage;
                playerHP.textContent = currentHp;
                playerStats.hp = currentHp;
            } 
            if (isKO(activePokemon) === true) {
                move1Span.classList.add('hidden');
                move2Span.classList.add('hidden');
                move3Span.classList.add('hidden');
                move4Span.classList.add('hidden');
            }
        }
        else if (moveData.category === 'Special') {
            let playerMoveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower); 
            computerHp = computerHp - playerMoveDamage;
            compHP.textContent = computerHp;
            compStats.hp = computerHp;

            // if (isKO(computerPokemon) === true) {
            //     computerPokemon = computerPokemon1[1];
            if (computerMove.category === 'Physical') {
                let compMoveDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                currentHp = currentHp - compMoveDamage;
                playerHP.textContent = currentHp;
                playerStats.hp = currentHp;

            } else if (computerMove.category === 'Special') {
                let compMoveDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                currentHp = currentHp - compMoveDamage;
                playerHP.textContent = currentHp;
                playerStats.hp = currentHp;
            } 
            if (isKO(activePokemon) === true) {
                move1Span.classList.add('hidden');
                move2Span.classList.add('hidden');
                move3Span.classList.add('hidden');
                move4Span.classList.add('hidden');
            }
        } else {
            currentHp = heals(maxHealth, currentHp);
            playerHP.textContent = currentHp;
        }
        
    }

    if (isKO(activePokemon) === true) {
        move1Span.classList.add('hidden');
        move2Span.classList.add('hidden');
        move3Span.classList.add('hidden');
        move4Span.classList.add('hidden');
        koNumber++;
        if (koNumber >= 3) {
            localStorage.setItem('DIDWIN', JSON.stringify('false'));
            window.location.replace('../endGame/');
        }
    }

    activePokemon.baseStats.hp = currentHp;
    playerHP.textContent = currentHp;
    compHP.textContent = computerHp;
    console.log(playerPokemon);
});

let koNumber = 0;


setInterval(function(){ 
    if (isKO(activePokemon) === true) {
        move1Span.classList.add('hidden');
        move2Span.classList.add('hidden');
        move3Span.classList.add('hidden');
        move4Span.classList.add('hidden');
    }

    let isComputerKO = isCompKO(computerPokemon, computerHp);
    
    if (isComputerKO === true) {
        if (computerPokemon.num === computerPokemon1[0].num) {
            computerPokemon.active = false;
            computerPokemon = computerPokemon1[1];
            activeComp1 = computerPokemon1[1];
            computerPokemon = {
                num: activeComp1.num,
                name: activeComp1.name,
                types: activeComp1.types,
                moves: activeComp1.moves, 
                baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
                img: activeComp1.img
            };
            computerPokemon.active = true;
            computerHp = computerPokemon.baseStats.hp;
            compHP.textContent = computerPokemon.baseStats.hp;
            compImage.src = `../${computerPokemon.img}`;

            // eslint-disable-next-line no-unused-vars
            let compStats = {
                hp: computerPokemon.baseStats.hp,
                atk: computerPokemon.baseStats.atk,
                def: computerPokemon.baseStats.def,
                spa: computerPokemon.baseStats.spa,
                spd: computerPokemon.baseStats.spd,
                spe: computerPokemon.baseStats.spe
            };
        } else if (computerPokemon.num === computerPokemon1[1].num) {
            computerPokemon.active = false;
            computerPokemon = computerPokemon1[2];
            activeComp1 = computerPokemon1[2];
            computerPokemon = {
                num: activeComp1.num,
                name: activeComp1.name,
                types: activeComp1.types,
                moves: activeComp1.moves, 
                baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
                img: activeComp1.img
            };
            computerPokemon.active = true;
            computerHp = computerPokemon.baseStats.hp;
            compHP.textContent = computerPokemon.baseStats.hp;
            compImage.src = `../${computerPokemon.img}`;

            // eslint-disable-next-line no-unused-vars
            let compStats = {
                hp: computerPokemon.baseStats.hp,
                atk: computerPokemon.baseStats.atk,
                def: computerPokemon.baseStats.def,
                spa: computerPokemon.baseStats.spa,
                spd: computerPokemon.baseStats.spd,
                spe: computerPokemon.baseStats.spe
            };
        } else {
            localStorage.setItem('DIDWIN', JSON.stringify('true'));
            window.location.replace('../endGame/');
        }
    }
}, 1000);
