const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined); // 1,2,3


const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined)
// This-is-my-first-message 
// => when building URL slug 할 때 유용하다. 
