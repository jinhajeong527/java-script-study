
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
 for(let i = 0; i < array.length; i++) {
    if(array[i] === searchElement)
        return true;
 }
 return false;
}

function includes(array, searchElement) {
    for(let element of array) {
        if(element === searchElement)
            return true;
    }
    return false;
}
