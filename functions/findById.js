export function findById(array, id){
    for (let index = 0; index < array.length; index++) {
        const item = array[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export default findById;