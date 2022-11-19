// function is one of the fundamental building block in javascript
// performing a task
function greet(name, lastName) { // parameter : at the time of declaration
    console.log('hello world ' + name + ' ' + lastName);
    //이렇게 콘솔로그 찍는거 약간 지저분해서 how to use template literals 사용하는지를 보여줄 것이다.
}

greet('John'); // actual value of supply for that parameter
// 위처럼 선언하고 콘솔 찍어보면 Hello John undefined가 나온다. 
// javascript 의 default value는 undefined이기 때문이다. 

// Calcuating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(2));