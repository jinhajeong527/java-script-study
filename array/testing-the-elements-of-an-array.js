const numbers = [1, -1, 2, 3];

// every(): 모두 매치하는지, sum() : 하나라도 매치 하는지
// 모던 펌션이라서 옛날 브라우저에서는 작동하지 않을 수 있다. 
// 이 배열에 있는 모든 숫자가 positive 한지 체크하고 싶다면?
// 해당 조건에 맞지 않는 엘리먼트 발견하면 더이상 찾지 않을 것이다.
const allPositive = numbers.every(function(value) {
    return value >= 0;
});
console.log(allPositive); // false

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive); // true

