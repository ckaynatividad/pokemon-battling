export function findById(array, num){
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.num === num) {
            return item;
        }
    }
}
export default findById;