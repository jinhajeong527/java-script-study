const numbers = [1, 2, 3, 4];
// remove last element and return it
const last = numbers.pop();
console.log(numbers);
console.log(last); // 4

// beginning
numbers.shift();

// Middle
numbers.splice(2, 1);
// 1) 지우기 시작할 인덱스 2) 지울 개수 
