import { isDead } from '../functions/isDead..js';


export function resultsDisplay(){
    if (isDead) {
        return 'defeat';
    } else {
        return 'congrats';
    }}

export const messages = {
    defeat: 'None of your pokemon are able to continue click the button to retry!',
    congrats: 'Congratulations you have bested your opponent. Click the button below to play again!',
};

