export function findById(array, id){
    for (let index = 0; index < array.length; index++) {
        const item = array[index]; //cahnged array[i] to array[index], the index variable needs to be the same as the iterator variable
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export default findById;