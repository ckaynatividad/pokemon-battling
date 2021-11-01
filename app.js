import { pokeDex } from './data/pokemon-data.js';
import findById from './functions/findById.js';
import { generatePokemon, setPokemon } from './functions/utils.js';

generatePokemon();

const submit = document.getElementById('submit');

submit.addEventListener('click', ()=>{
    const selected = document.querySelectorAll('input[type=radio]:checked');
    console.log(selected);
    const huwwo = findById(pokeDex, selected.values);
    console.log(huwwo);

    if (selected.length > 3 || selected.length < 3) {
        alert('Please only choose three.');
        // window.location.reload();
    } else {
  
        setPokemon(selected);
        // window.location = './battle';
    }
});