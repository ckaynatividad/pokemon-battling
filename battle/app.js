import { getPokemon, generateComPokemon } from '../functions/utils.js';
import { moves } from '../data/pokemon-moves.js';
// import { pokeDex } from '../data/pokemon-data.js';

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

const playerPokemon = getPokemon();

const computerPokemon = generateComPokemon();

//player pokemon data
playerHP.textContent = playerPokemon[0].baseStats.hp;
playerImage.src = `../${playerPokemon[0].img}`;



//radio buttons
move1Span.textContent = playerPokemon[0].moves[0];
move1.value = playerPokemon[0].moves[0];
move2Span.textContent = playerPokemon[0].moves[1];
move2.value = playerPokemon[0].moves[2];
move3Span.textContent = playerPokemon[0].moves[2];
move3.value = playerPokemon[0].moves[3];
move4Span.textContent = playerPokemon[0].moves[3];
move4.value = playerPokemon[0].moves[4];

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

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedMoveRadio = document.querySelector('input[type=radio]:checked');
    if (selectedMoveRadio.id === 'switch') {
        console.log('switch');
    } else {
        const selectedMove = selectedMoveRadio.value;
        console.log(selectedMove);
        const moveData = moves[selectedMove];
        console.log(moveData);
    }
    
});
