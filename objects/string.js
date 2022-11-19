// String primitive
const message = 'hi my name is jinha jeong!'; // primitive type...
// typeof message => string
// 그렇지만 얘를 . notation과 함께 사용하더라도,
// 자바스크립트 엔진이 내부적으로 얘를 스프링 오브젝트로 wrapping 한다.

// String object
const another = new String('hi');
// typeof another => object


message.includes('jinha');
message.startsWith('hi'); // case sensitive => true
message.endsWith('Jeong!'); // case sensitive => false
message.indexOf('is');
message.replace('hi', 'Hi');// returns new string and does not modify the original one..
message.toUpperCase(message);
message.toLowerCase(message);
message.trim() // message의 앞과 뒤의 whitespace를 없애준다.
message.trimStart() // message의 앞만 whitespace 없애준다.
message.trimEnd() // message의 뒤만 whitespace 없애준다. 


// Escape Notation
const escapeMessage = 'This is my\n' + '\'first message';

// '를 문자열에 사용하기 위해서는 백슬래쉬를 앞에 prefix 해야 한다. 
// \n => new line

message.split(' ');

