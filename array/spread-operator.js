// concat과 같이 배열을 연결하는 또 다른 방법이다.
// ES6의 Spread Operator 이다. 
const first = [1, 2, 3];
const second = [4, 5, 6];
//Spread Operator
const combined = [...first, 'a', ...second, 'b'];
// copy of the original array
//const copy = combined.slice();
const copy = [...combined];

