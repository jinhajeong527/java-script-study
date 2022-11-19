let x = 1;

// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1); // Strict Equality (Type + Value)
console.log(x == 1); // Lose Equality Operator
console.log(x !== 1);

console.log( 1 === 1) // Strict Equality (Type + Value), true
console.log( 1 === '1') // Strict Equality (Type + Value), false

// type matching을 신경쓰지 않는다. Values가 매칭하는지 볼 것이다. 
console.log(1 == 1); // true
console.log('1' == 1) // true
console.log(true == 1) // true
