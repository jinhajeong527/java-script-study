function foo() {
    var x = 1;
    var x = 2;
    console.log(x); //var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.
}
foo();
function bar() {
    let x = 1;
    //let x = 2; // Uncaught SyntaxError: Identifier 'x' has already been declared (at 13-04.js:9:9)
}
bar();