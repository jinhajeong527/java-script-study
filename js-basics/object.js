let person = {
    name: 'Mosh',
    age: 30
};
// Dot Notation. more concise
person.name = 'Jonh';
// Bracket Noation
// 런타임때까지는 target property의 이름을 모를 수 있고 그럴 때 Bracket Noation 사용할 수 있다. 
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);