const Person = (function () {
    let _age = 0; //private

    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    }

    return Person;
}());

const me = new Person('Lee', 20);
me.sayHi();
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person('Kim', 30);
you.sayHi();
console.log(you.name); // Kim
console.log(you._age); // undefined
// _age 변수 값이 변경된다!
me.sayHi();