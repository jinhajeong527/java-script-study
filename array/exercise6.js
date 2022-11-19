const numbers = [12, 2, 3, 4, 5];
const max = getMax(numbers);
// const max = getMax([]); // empty or not 인지도 체크를 해야한다.
console.log(max);

function getMax(array) {
    if(array.length === 0) {
        return undefined;
    }
    const maxValue = array.reduce((accumulator,currenValue) => {
        const compare = currenValue > accumulator ? currenValue : accumulator;
        return compare;
    });
    return maxValue;
    // return array.reduce((a, b) => (a > b) ? a : b);
}
