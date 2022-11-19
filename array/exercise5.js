const numbers = [1, 2, 3, 4, 1, 1];
const count = countOccurrences(numbers, 1);
//console.log(count);

function countOccurrences(array, searchElement) {
    let count = 0;
    for(let element of array) {
        if(element === searchElement) {
            count++;
        }
    }
    return count;
}
// reduce() method를 사용해보기
const count2 = countOccurrences2(numbers, 1);
console.log(count2);

function countOccurrences2(array, searchElement) {
    const count = array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
    return count;
}


