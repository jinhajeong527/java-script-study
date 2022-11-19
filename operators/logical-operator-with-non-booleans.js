// falsy values in javascript
// 아래의 value 들을 logical expression에서 사용하면,

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN(Not a Number)
// falsy하게 취급될 것이고, falsy 가 아니면 truthy이다.  
console.log(false || 'Mosh'); // falsy가 아니니까 truthy하게 취급된다.
// return 'Mosh'

console.log(false || 1 || 2); // 1
// 가장 먼저 발견되는 truthy를 리턴한다. 

// Short-circuiting

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
// userColor가 있으면 red, 없으면 blue 리턴한다.