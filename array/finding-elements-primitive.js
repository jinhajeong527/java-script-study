// Primitives

// 배열에서 엘리먼트를 찾는 것은 
// primitive, reference 타입 중 어떤 것을 찾냐와 연관이 있다.
const numbers = [1, 2, 3, 4, 5, 1, 6];
numbers.indexOf(2); // 있으면 index number 없으면 -1을 리턴할 것이다.
numbers.indexOf('a'); // 있으면 index number 없으면 -1을 리턴할 것이다.
numbers.indexOf('1'); // 타입이 중요하기 떄문에 이 경우에 -1을 리턴할 것이다.

numbers.lastIndexOf(1);// 더 뒤에있는 인덱스의 1을 가져올 것이다.

console.log(numbers.indexOf(1) !== -1);
// 저게 true를 리턴하면 해당 엘리먼트가 배열에 존재한다는 뜻이 된다. 
// 똑같은 일 하는 자바스크립트 메서드가 있음
numbers.includes(1); // 존재하면 true를 리턴한다.

numbers.indexOf(1, 2);// 찾기를 시작할 인덱스를 두번째 인자로 넣어줄 수 있다. 