// two way of creating variable
// const, let
// let : 프로그램의 아웃풋에 어떻게 영향을 주는가?
const a = 5;
const b = 3;
let myName = "nico";
// const cannot be changed
myName = "nicolas";
console.log(a + b);
console.log(myName);
// we can extract some meaning from here...
// const를 디폴트로 사용하고, 변수를 update하고 싶다면 그 때 let을 쓰는 것이 맞다. 
// 대개 거의 업데이트 하지 않을 것이다. 
// 이렇게 구분하는 것은 새로운 버전이고, 옛날 버전을 작동안되게 할 수 없다. 
// old way of doing things: var(variable)
// you could update var anytime you want => 브라우저 콘솔에서 바꿔버릴 수 있고
// 그렇게 되면 언어를 통한 보호를 받지 못하게 된다. 
// var a를 브라우저에서 업데이트 하더라도, 언어가 말해주지 않는 것이 된다. 


