// function is one of the fundamental building block in javascript
// 힘수는 piece of code that you can use over and over and over again
// performing a task
function greet(name, lastName) { // parameter : at the time of declaration
    // block of code to execute
    console.log('hello world ' + name + ' ' + lastName + '!');
    //이렇게 콘솔로그 찍는거 약간 지저분해서 how to use template literals 사용하는지를 보여줄 것이다.
}

greet('John'); // actual value of supply for that parameter
// 위처럼 선언하고 콘솔 찍어보면 Hello John undefined가 나온다. 
// lastName에 대해서는 파라미터 값 넘겨주지 않았는데, 
// javascript 의 default value는 undefined이기 때문에 위에 적은 것과 같이 나오게 되는 것이다. 
greet('Jinha', 'Jeong');


// Calcuating a value
function square(number) {
    return number * number;
}
console.log(square()); // NaN이 뜨게 된다. ==> Not a Number
const number = square(2);
console.log(number);
console.log(square(2));

// 오브젝트 안에서 선언된 함수는 조금 다르게 생겼음에 유의하자.
const player = { 
    name : "nico",
    sayHello : function(otherPersonsName) {
        console.log("hello " + otherPersonsName + "! nice to meet you!");
    },
};
console.log(player.name);
player.sayHello("lynn");