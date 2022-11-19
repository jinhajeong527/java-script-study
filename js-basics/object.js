const person = {
    name: 'Mosh',
    age: 30,
    isSmart: true
};
// Dot Notation : more concise
person.name = 'Jonh';

// Bracket Noation
// 런타임때까지는 target property의 이름을 모를 수 있고 그럴 때 Bracket Noation 사용할 수 있다. 
const selection = 'name';
// 이건 컨스탠스 오브젝트 안의 무언가를 바꾸는 것이다. 오브젝트는 여전히 똑같다. const로 선언해도 되는 이유이다. 
// whole constant를 value로 update 하려고 할 때 문제가 되는 것이다. 
person[selection] = 'Mary Jane';

//person = true; // 이렇게 할경우 constant object를 boolean으로 업데이트 하려는 것이기에 에러가 발생한다.

console.log(person.name);
console.log(person);

// 무언가를 object에 더하는 것은 어떨까?
person.hobby = 'coding';
person.age = person.age + 1;
console.log(person); // 원한다면 어떤 프로퍼티든 만들어도 된다. 
console.log(person, console);


