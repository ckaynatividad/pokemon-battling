/* eslint-disable */

import { getPokemon } from '../functions/utils.js';
// import { isDead } from '../functions/isDead.js';
import { resultsDisplay, messages } from './endGameLogic.js';

//get pokemon and check if any are alive(isDead)
const pokes = getPokemon();
//pokes form local storage

//this log breaks the code if removed.
console.log(pokes);
//linking to area in html
const resultsPlace = document.getElementById('main-container');
//check if the pokemon are alice see endGameLogic.js
const results = resultsDisplay();
//call text from js
const resultsMessage = messages[results];
//set in html
resultsPlace.textContent = resultsMessage;

const audio = document.getElementById('audio');
audio.volume = .2;