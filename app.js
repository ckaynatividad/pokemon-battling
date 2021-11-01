import { pokeDex } from './data/pokemon-data.js';
import findById from './functions/findById.js';
import { generatePokemon, setPokemon, getPokemon } from './functions/utils.js';

generatePokemon();

const submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
    const selected = document.querySelectorAll('input[type=radio]:checked');
    const chosenArray = [];
    if (selected.length > 3 || selected.length < 3) {
        alert('Please only choose three.');
        // window.location.reload();
    } else {
        for (let select of selected) {      
            const chosen = findById(pokeDex, +select.value);
            chosenArray.push(chosen);
            
            setPokemon(chosenArray);
        }
        // window.location = './battle';
    }
});