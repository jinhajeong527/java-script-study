let numbers = [1, 2, 3, 4];
let another = numbers; // 이렇게 하면 gc 안당한다.
// Solution 1 ** 
numbers = [];
// 이렇게 하면 old memory는 여전히 메모리에 남아있다.

// another는 여전히 old object를 포인팅 하고 있다.
console.log(another); // [1, 2, 3, 4]
// 기존의 배열을 참조하는 레퍼런스가 없을 떄 사용하면 된다. 
// Single reference 이면 valid
// Solution 2 ** 
numbers.length = 0;
// this will truncate the array
console.log(numbers); // []
console.log(another); // []

// Solution 3 : splice() method
numbers.splice(0, numbers.length);

// Solution 4 : 
// last element를 지우는 pop() 메서드를 사용해 for loop을 돌린다.
while(numbers.length > 0)
    numbers.pop(); // perfomance cost



