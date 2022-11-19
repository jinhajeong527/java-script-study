let x = 0;
var y = 0;

function start() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log(i);
}
start();

// let i = 0으로 선언하면, i is not defined 에러가 뜨는데
// var 로 하면 해당 에러 안뜸
// 왜냐면 var로 선언하면 scope가 리밋되지 않는다.
// 선언된 function에 scoped 된다. 

// ES6 전에는 var가 유일하게 variable을 선언하는 방법이었다.
// ES6(ES2015) : let, const => block-scoped

var color = 'red'; // 함수 밖에서 사용하면, 글로벌 변수가 되고 브라우저의 윈도우 오브젝트에 어태치된다.   
let age = 30;

// window object는 central이고, 
// Only one instance of the window object
// 3rd party library를 사용하면, 같은 변수 이름이 있으면 내 variable을 오버라이트 할 것이다.

function sayHi() {
    console.log('hi');
}
// window object에 붙을 것이고 그렇게되면 bad practice가 된다.
// var를 통해 변수를 선언하면, function scope 인 변수를 만들기 때문이다.(block scope가 아니라)
 