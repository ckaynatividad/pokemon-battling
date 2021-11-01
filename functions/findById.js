export function findById(array, num){
    for (let index = 0; index < array.length; index++) {
        const item = array[index]; //cahnged array[i] to array[index], the index variable needs to be the same as the iterator variable
        if (item.num === num) {
            return item;
        }
    }
    return null;
}
export default findById;