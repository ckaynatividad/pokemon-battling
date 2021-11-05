import { resultsDisplay, messages } from './endGameLogic.js';

//linking to area in html
const resultsPlace = document.getElementById('main-container');
//check if the pokemon are alice see endGameLogic.js
const results = resultsDisplay();
//call text from js
const resultsMessage = messages[results];
//set in html
resultsPlace.textContent = resultsMessage;