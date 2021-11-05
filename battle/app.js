import { getPokemon, generateComPokemon, isKO } from '../functions/utils.js';
import { moves } from '../data/pokemon-moves.js';
import { getActive } from '../functions/getActive.js';
import { baseStat } from '../functions/baseStat.js';
import { damage, heals } from '../functions/damage.js';
import findById from '../functions/findById.js';
import isCompKO from '../functions/isCompKO.js';


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
let activePokemon = {
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
let activeComp1 = getActive(computerPokemon1);
console.log(activeComp1);
let computerPokemon = {
    num: activeComp1.num,
    name: activeComp1.name,
    types: activeComp1.types,
    moves: activeComp1.moves, 
    baseStats: { hp: baseStat(activeComp1.baseStats.hp), atk: baseStat(activeComp1.baseStats.atk), def: baseStat(activeComp1.baseStats.def), spa: baseStat(activeComp1.baseStats.spa), spd: baseStat(activeComp1.baseStats.spd), spe: baseStat(activeComp1.baseStats.spe) },
    img: activeComp1.img
};
/*let compStats = {
    hp: computerPokemon.baseStats.hp,
    atk: computerPokemon.baseStats.atk,
    def: computerPokemon.baseStats.def,
    spa: computerPokemon.baseStats.spa,
    spd: computerPokemon.baseStats.spd,
    spe: computerPokemon.baseStats.spe
};*/


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
console.log(compStats);
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

            
const switchButton = document.getElementById('switch-button');
switchButton.classList.add('hidden');
// const pokeForm = document.getElementById('move-select-form');
//let turn = 0;
const maxHealth = playerStats.hp;
const compHealth = compStats.hp;
let currentHp = activePokemon.baseStats.hp;
let computerHp = computerPokemon.baseStats.hp;
console.log(computerPokemon1);
console.log(computerPokemon1[1]);
console.log(computerHp);
submit.addEventListener('click', (e) => {
    console.log('ONCLICK', currentHp);
    e.preventDefault();
    const selectedMoveRadio = document.querySelector('input[type=radio]:checked');
    //turn++;
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
    let randomNumber = Math.floor(Math.random() * 3); // make this 
    let compMove = computerPokemon.moves[randomNumber];
    let computerMove = moves[compMove];
    console.log('COMP MOVE NAME', compMove);
    if (selectedMoveRadio.id === 'switch') {
        console.log('switch button pressed');

        console.log(activePokemon);

        const pokeSwitchRadio1 = document.getElementById('pokemon-1');
        const pokeSwitchRadio2 = document.getElementById('pokemon-2');
        const pokeSwitchRadio3 = document.getElementById('pokemon-3');
        const pokeSwitchSpan1 = document.getElementById('pokemon-1-span');
        const pokeSwitchSpan2 = document.getElementById('pokemon-2-span');
        const pokeSwitchSpan3 = document.getElementById('pokemon-3-span');
        const pokeSwitchForm = document.getElementById('pokemon-switch-form');
        const moveSelectForm = document.getElementById('move-select-form');
        const switchButton = document.getElementById('switch-button');
        const submit = document.getElementById('submit');
        submit.classList.add('hidden');
        switchButton.classList.remove('hidden');
        pokeSwitchRadio1.value = playerPokemon[0].num;
        pokeSwitchRadio2.value = playerPokemon[1].num;
        pokeSwitchRadio3.value = playerPokemon[2].num;
        pokeSwitchSpan1.textContent = playerPokemon[0].name;
        pokeSwitchSpan2.textContent = playerPokemon[1].name;
        pokeSwitchSpan3.textContent = playerPokemon[2].name;
        pokeSwitchForm.classList.remove('hidden');
        moveSelectForm.classList.add('hidden');
        // if (playerPokemon[0].active === true) {
        //     pokeSwitchRadio1.classList.add('hidden');
        //     pokeSwitchSpan1.classList.add('hidden');
        // } else if (playerPokemon[1].active === true) {
        //     pokeSwitchRadio2.classList.add('hidden');
        //     pokeSwitchSpan2.classList.add('hidden');
        // } else if (playerPokemon[2].active === true) {
        //     pokeSwitchRadio3.classList.add('hidden');
        //     pokeSwitchSpan3.classList.add('hidden');
        // }

        switchButton.addEventListener('click', (e) => {
            e.preventDefault();
            const test = document.querySelector('input[name="pokemon-switch"]:checked');
            
            activePokemon.active = false;
            const newActiveNum = test.value;
            const newActive = findById(playerPokemon, +newActiveNum);
            activePokemon = newActive;
            activePokemon.active = true;

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
            submit.classList.remove('hidden');
            switchButton.classList.add('hidden');
            move1Span.classList.remove('hidden');
            move2Span.classList.remove('hidden');
            move3Span.classList.remove('hidden');
            move4Span.classList.remove('hidden');
        });
        //^^ABOVE IS SWITCHING^^
        //
        //
        //
        //
        //
    } else {
        const selectedMove = selectedMoveRadio.value;
        const moveData = moves[selectedMove];
        console.log('SELECTED MOVES', selectedMove);
        console.log('priority', moveData.priority);
        console.log('comp prio', computerMove.priority);
        //^^ABOVE IS SELECTING MOVES
        //
        //
        //
        if (moveData.priority > computerMove.priority){
            
            if (moveData.category === 'Physical') {
                let moveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower); 
                console.log(moveDamage);
                computerHp = computerHp - moveDamage;
                console.log(computerHp);
                compHP.textContent = Math.floor(computerHp);
                compStats.hp = computerHp;
                //ABOVE IS IF WE USE PHYSICAL AND PRIORITY
                //
                if (isKO(computerPokemon) === true) {
                    computerPokemon = computerPokemon1[1];
                    //ABOVE IS IF WE KNOCK OUT COM MID TURN
                    //
                } else if (computerMove.category === 'Physical') {
                    console.log('asdfasdf');
                    let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                    currentHp = currentHp - compDamage;                    
                    playerHP.textContent = Math.floor(currentHp);
                    playerStats.hp = currentHp;
                    console.log(playerStats.hp);
                    //ABOVE IS IF WE USER  PHYSICAL MOVE AND PRIORITY AND COM SURVIVES AND ATTACKS BACK WITH PHYSICAL
                    //
                } else if (computerMove.category === 'Special') {
                    console.log('asdfasdf');
                    let compDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                    currentHp = currentHp - compDamage;                    
                    playerHP.textContent = Math.floor(currentHp);
                    playerStats.hp = currentHp;
                    console.log(playerStats.hp);
                    //ABOVE IS IF WE USER  PHYSICAL MOVE AND PRIORITY AND COM SURVIVES AND ATTACKS BACK WITH SPECIAL
                    //
                }

                // let isPlayerKO = isKO(activePokemon);
                if (isKO(activePokemon) === true) {
                    move1Span.classList.add('hidden');
                    move2Span.classList.add('hidden');
                    move3Span.classList.add('hidden');
                    move4Span.classList.add('hidden');
                    //IF WE ARE KO'D AFTER ATTACKING WITH PHYSICAL PRIORITY
                }
                //ABOVE IS IF WE HAVE PRIORITY
                //
                //
                //
                //
                //
            } else if (moveData.category === 'Special') {
                //ABOVE IS PRIORITY AND SPECIAL
                let moveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                computerHp = computerHp - moveDamage;
                console.log(computerHp);
                compHP.textContent = Math.floor(computerHp);
                compStats.hp = computerHp;
                if (isKO(computerPokemon) === true) {
                    computerPokemon = computerPokemon1[1];
                } else if (computerMove.category === 'Physical') {
                    console.log('asdfasdf');
                    let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                    currentHp = currentHp - compDamage;                    
                    playerHP.textContent = Math.floor(currentHp);
                    playerStats.hp = currentHp;
                    console.log(playerStats.hp);
                } else if (computerMove.category === 'Special') {
                    console.log('asdfasdf');
                    let compDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                    currentHp = currentHp - compDamage;                    
                    playerHP.textContent = Math.floor(currentHp);
                    playerStats.hp = currentHp;
                    console.log(playerStats.hp);
                } 
                if (isKO(activePokemon) === true) {
                    move1Span.classList.add('hidden');
                    move2Span.classList.add('hidden');
                    move3Span.classList.add('hidden');
                    move4Span.classList.add('hidden');
                }
            } else {
                computerHp = heals(compHealth, computerHp);
                compHP.textContent = computerHp;
                console.log("healed", computerHp);
            }
            //ABOVE IS SPECIAL PRIORITY MOVES IN USE IN OUR GAME SO HYPOTHETICALLY THE ABOVE SECTION SHOULD NOT BE USED
            //
            //
            //
            //
            console.log('moveDataCategory', moveData.category);
        } else if (computerMove.priority > moveData.priority) {
            //ABOVE IS IF THE COM HAS PRIORITY
            //
            //
            //
            if (computerMove.category === 'Physical') {
                let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                currentHp = currentHp - compDamage;                    
                playerHP.textContent = Math.floor(currentHp);
                playerStats.hp = currentHp;
                console.log(playerStats.hp);
                //ABOVE IS IF COM IS USING PRIORITY AND IT IS PHYSICAL
                //
                //
                if (isKO(activePokemon) === true) {
                    move1Span.classList.add('hidden');
                    move2Span.classList.add('hidden');
                    move3Span.classList.add('hidden');
                    move4Span.classList.add('hidden');
                }
                //ABOVE IS IF WE ARE KO'D BY COM PHYISCAL PRIORITY 
                //
                //
                else if (moveData.category === 'Physical') {
                    let moveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower); 
                    console.log(moveDamage);
                    computerHp = computerHp - moveDamage;
                    console.log(computerHp);
                    compHP.textContent = Math.floor(computerHp);
                    compStats.hp = computerHp;
                    //ABOVE IS OUR PHYSICAL ATTACK AFTER SURVIVING COM PHYSICCAL AND PRIORITY ATTACK
                    //
                    //
                    //
                    if (isKO(computerPokemon) === true) {
                        computerPokemon = computerPokemon1[1];}
                        //ABOVE IS IF WE KO THE OPPPONENT WITH A PHYSICAL MOVE AFTER GETTING HIT BY A PHYSICAL PRIORITY MOVE
                        //
                        //
                        //
                } else if (moveData.category === 'Special') {
                    let moveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                    computerHp = computerHp - moveDamage;
                    console.log(computerHp);
                    compHP.textContent = Math.floor(computerHp);
                    compStats.hp = computerHp;
                     //ABOVE IS OUR SPECIAL ATTACK AFTER SURVIVING COM PHYSICCAL AND PRIORITY ATTACK
                    //
                    //
                    //
                    if (isKO(computerPokemon) === true) {
                        computerPokemon = computerPokemon1[1];}
                        //ABOVE IS IF WE KO THE OPPPONENT WITH A SPECIAL MOVE AFTER GETTING HIT BY A PHYSICAL PRIORITY MOVE
                        //
                        //
                        //
                    
                } else {
                    currentHp = heals(maxHealth, currentHp);

                    playerHP.textContent = Math.floor(currentHp);

                     //ABOVE IS OUR HEALING AFTER SURVIVING COM PHYSICCAL AND PRIORITY ATTACK
                    //
                    //
                    //
                }
            } else {
                let compDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                currentHp = currentHp - compDamage;                    
                playerHP.textContent = Math.floor(currentHp);
                playerStats.hp = currentHp;
                console.log(playerStats.hp);
                //ABOVE IS COM SPECIAL PRIORITY WHICH DOES NOT EXIST
            }
            
        } else {
            if (playerStats.spe >= compStats.spe) {
                console.log('fast and physical');
                if (moveData.category === 'Physical') {
                    let moveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower);
                    computerHp = computerHp - moveDamage;
                    console.log(computerHp);
                    compHP.textContent = Math.floor(computerHp);
                    compStats.hp = computerHp;
                    console.log(`damage = ${moveDamage}`);
                    // //ABOVE IS OUR PHYSICAL ATTACK WHILE FASTER THAN OPPONENT AND NO PRIORITY
                    //
                    //
                    //
                    if (isKO(computerPokemon) === true) {
                        computerPokemon = computerPokemon1[1];
                         //ABOVE IS IF OUR PHYSICAL ATTACK KO OPPONENT WHILE FASTY AND NO PRIORITY
                    //
                    //
                    //
                    
                    } else if (computerMove.category === 'Physical') {
                        let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                        currentHp = currentHp - compDamage;                    
                        playerHP.textContent = Math.floor(currentHp);
                        playerStats.hp = currentHp;
                        console.log(playerStats.hp);
                        //ABOVE IS COM PHYSICAL ATTACK AFTER SURVIVING COM PHYSICCAL AND FASTER ATTACK
                    //
                    //
                    //
                        if (isKO(activePokemon)) {
                            move1Span.classList.add('hidden');
                            move2Span.classList.add('hidden');
                            move3Span.classList.add('hidden');
                            move4Span.classList.add('hidden');
                        }
                    } else if (computerMove.category === 'Special') {
                        let compDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                        currentHp = currentHp - compDamage;
                        console.log(computerHp);
                        playerHP.textContent = Math.floor(currentHp);
                        playerStats.hp = currentHp;
                        //ABOVE IS COM SPECIAL ATTACK AFTER SURVIVING our PHYSICCAL AND FASTER ATTACK
                    //
                    //
                    //
                        if (isKO(activePokemon)) {
                            move1Span.classList.add('hidden');
                            move2Span.classList.add('hidden');
                            move3Span.classList.add('hidden');
                            move4Span.classList.add('hidden');
                        }
                    } else {
                        currentHp = heals(maxHealth, currentHp);
                        playerHP.textContent = currentHp;
                        console.log("healed", computerHp)
                        //ABOVE IS THE COM HEAL AFTER BEING HIT BY A PHYSICAL FASTER ATTACK
                    }

                } else if (moveData.category === 'Special') {
                    let moveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                    computerHp = computerHp - moveDamage;
                    console.log(computerHp);
                    compHP.textContent = Math.floor(computerHp);
                    compStats.hp = computerHp;
                    // //ABOVE IS OUR SPECIAL ATTACK WHILE FASTER THAN OPPONENT AND NO PRIORITY
                    //
                    //
                    //
                    if (isKO(computerPokemon) === true) {
                        computerPokemon = computerPokemon1[1];
    
                         //ABOVE IS IF OUR SPECIAL ATTACK KO OPPONENT WHILE FASTY AND NO PRIORITY
                    //
                    //
                    //
                    
                    } else if (computerMove.category === 'Physical') {
                        let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                        currentHp = currentHp - compDamage;                    
                        playerHP.textContent = Math.floor(currentHp);
                        playerStats.hp = currentHp;
                        //ABOVE IS COM PHYSICAL ATTACK AFTER SURVIVING COM SPECIAL AND FASTER ATTACK
                    //
                    //
                    //
                        console.log(playerStats.hp);
                        if (isKO(activePokemon) === true) {
                            move1Span.classList.add('hidden');
                            move2Span.classList.add('hidden');
                            move3Span.classList.add('hidden');
                            move4Span.classList.add('hidden');
                        }
                    } else if (computerMove.category === 'Special') {
                        let moveDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                        currentHp = currentHp - moveDamage;
                        console.log(currentHp);
                        compHP.textContent = Math.floor(currentHp);
                        compStats.hp = currentHp;
                        //ABOVE IS COM SPECIAL ATTACK AFTER SURVIVING COM SPCEIAL AND FASTER ATTACK
                    //
                    //
                    //
                        if (isKO(activePokemon) === true) {
                            move1Span.classList.add('hidden');
                            move2Span.classList.add('hidden');
                            move3Span.classList.add('hidden');
                            move4Span.classList.add('hidden');
                        }
                    } else {
                        computerHp = heals(compHealth, computerHp);

                        compHP.textContent = Math.floor(computerHp);

                    //ABOVE IS THE COM HEAL AFTER BEING HIT BY A PHYSICAL FASTER ATTACK
                    }

                } else {
                    currentHp = heals(maxHealth, currentHp);
                    playerHP.textContent = currentHp;
                    activePokemon.hp = currentHp;
                    console.log('HEAL', currentHp);
                    //ABOVE IS OUR HEAL IF FASTER
                    if (computerMove.category === 'Physical') {
                        let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                        currentHp = currentHp - compDamage;                    
                        playerHP.textContent = Math.floor(currentHp);
                        playerStats.hp = currentHp;
                    //ABOVE IS COM PHYSICAL ATTACK AFTER WE ARE FASTER AND HEAL
                //
                //
                //
                        console.log(playerStats.hp);
                        if (isKO(activePokemon) === true) {
                            move1Span.classList.add('hidden');
                            move2Span.classList.add('hidden');
                            move3Span.classList.add('hidden');
                            move4Span.classList.add('hidden');
                        }
                    } else if (computerMove.category === 'Special') {
                        let moveDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                        currentHp = currentHp - moveDamage;
                        console.log(currentHp);
                        compHP.textContent = Math.floor(currentHp);
                        compStats.hp = currentHp;
                  //ABOVE IS COM SPECIAL ATTACK AFTER WE ARE FASTER AND HEAL
                //
                //
                //
                        if (isKO(activePokemon) === true) {
                            move1Span.classList.add('hidden');
                            move2Span.classList.add('hidden');
                            move3Span.classList.add('hidden');
                            move4Span.classList.add('hidden');
                        }
                    } else {
                        computerHp = heals(compHealth, computerHp);


                        compHP.textContent = Math.floor(computerHp);

                //ABOVE IS THE COM HEAL WE HEAL FASTER
                //
                //
                    } 
                }} else if (playerStats.spe < compStats.spe){
            
                if (computerMove.category === 'Physical') {
                    console.log('asdfasdf');
                    let compDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
                    currentHp = currentHp - compDamage;                    
                    playerHP.textContent = Math.floor(currentHp);
                    playerStats.hp = currentHp;
                    console.log(playerStats.hp);
                    //ABOVE IS WHEN THE COM IS FASTER AND USES PHYSICAL ATTACK
                    //
                    //
                    if (isKO(activePokemon) === true) {
                        move1Span.classList.add('hidden');
                        move2Span.classList.add('hidden');
                        move3Span.classList.add('hidden');
                        move4Span.classList.add('hidden');
                        //ABOVE IS IF WE ARE KO'D BY FASTER PHYSICAL MOVE
                        //
                        //
                    } else if (moveData.category === 'Physical') {
                        let moveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower); 
                        computerHp = computerHp - moveDamage;
                        console.log(computerHp);
                        compHP.textContent = Math.floor(computerHp);
                        compStats.hp = computerHp;
                        //ABOVE IS IF WE SURVIVE A PHYSICAL FASTER MOVE AND ATTACK BACK WITH PHYSICAL
                        //
                        //
                        if (isKO(computerPokemon) === true) {
                            computerPokemon = computerPokemon1[1];}
                            //ABOVE IS IF OUR PHYSICAL MOVE KO'S COM AFTER WE ARE HIT WITH FASTER PHYSICAL MOVE
                    } else if (moveData.category === 'Special') {
                        let moveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                        computerHp = computerHp - moveDamage;
                        console.log(computerHp);
                        compHP.textContent = Math.floor(computerHp);
                        compStats.hp = computerHp;
                        //ABOVE IS IF COM IS FASTER AND USES PHYSICAL MOVE AND WE ATTACK BACK WITH SPECIAL
                        //
                        //
                        //
                        if (isKO(computerPokemon) === true) {
                            computerPokemon = computerPokemon1[1];
                        //ABOVE IS IF OUR SLOWER SPECIAL MOVE KNOCKS OUR FASTER PHYSICAL
                        }
                        else {
                            currentHp = heals(maxHealth, currentHp);

                            playerHP.textContent = Math.floor(currentHp);

                        //ABOVE IS IF FASTER PHYSICAL MOVE DOESN'T KO US AND WE USE HEAL
                        }}
                } else if (computerMove.category === 'Special') {
                    console.log('asdfasdf');
                    let compDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
                    currentHp = currentHp - compDamage;                    
                    playerHP.textContent = Math.floor(currentHp);
                    playerStats.hp = currentHp;
                    console.log(playerStats.hp);
                    //ABOVE IS IS IF COM IS FASTER AND USES SPECIAL MOVE
                    //
                    //
                    //

                    if (isKO(activePokemon) === true) {
                        move1Span.classList.add('hidden');
                        move2Span.classList.add('hidden');
                        move3Span.classList.add('hidden');
                        move4Span.classList.add('hidden');
                        //ABOVE IS IF THE FASTER SPECIAL MOVE KO'S US
                        //
                        //
                        //
                    } else if (moveData.category === 'Physical') {
                        let moveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower); 
                        console.log(moveDamage);
                        computerHp = computerHp - moveDamage;
                        console.log(computerHp);
                        compHP.textContent = Math.floor(computerHp);
                        compStats.hp = computerHp;
                        //ABOVE IS IF A FASTER SPECIAL ATTACK AND WE USE PHYSICAL BACK
                        //
                        //
                        //
                        if (isKO(computerPokemon) === true) {
                            computerPokemon = computerPokemon1[1];}
                    } else if (moveData.category === 'Special') {
                        let moveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower);
                        computerHp = computerHp - moveDamage;
                        console.log(computerHp);
                        compHP.textContent = Math.floor(computerHp);
                        compStats.hp = computerHp;
                        //ABOVE IS IF A FASTER SPECIAL ATTACK AND WE USE PHYSICAL BACK
                        //
                        //
                        //
                        if (isKO(computerPokemon) === true) {
                            computerPokemon = computerPokemon1[1];}
                        else {
                            currentHp = heals(maxHealth, currentHp);
                            playerHP.textContent = Math.floor(currentHp);
                        //ABOVE IS IF A FASTER SPECIAL ATTACK AND WE USE HEALING
                        //
                        //
                        //
                        }
                    } 

                } else {
                    computerHp = heals(compHealth, computerHp);

                    compHP.textContent = Math.floor(computerHp);

                //ABOVE IS IF COM IS FASTER AND USES A HEALING MOVE
                //
                //
                //
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

            console.log('currentHP-end FUNCTION', currentHp);
            activePokemon.baseStats.hp = currentHp;
            console.log('active pokemon', activePokemon);
            playerHP.textContent = Math.floor(currentHp);
            compHP.textContent = Math.floor(computerHp);
    
        }}});

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

