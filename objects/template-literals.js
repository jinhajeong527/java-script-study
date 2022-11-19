const escapeMessage = 
'This is my\n' +
'\'first message'; // very very ugly and noisy
// 이 때 template literal을 사용한다.

// Object {}
// Boolean true, false
// String '', ""
// Template Literals ``

const another = 
`This is my 
'first' message`;
// 이렇게 하면 위와같이 \n 과 같이 하지 않아도 
// 내가 원히는 모습으로 출력할 수 있다. 
// 내 애플리케이션에서 이메일 메시지 보내고 싶을 때 유용하게 사용할 수 있다. 
const name = 'Jinha';

const emailMessage = 
`Hi ${name}, ${2 + 3} 

Best Regards For You

Bye`;

// 템플릿 리터럴의 또다른 장점은 placeholder를 추가할 수 있다는 것이다.
// we can add any expression that produces a value in between the curly braces




