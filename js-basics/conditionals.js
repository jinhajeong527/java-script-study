const age = prompt('How old are you?');
console.log(typeof age); // string만 계속나옴. default 임
// "15" => 15로 즉 스트링에서 숫자로 어떻게 바꿀 수 있는가?
console.log(parseInt(age)); // NaN 확인할 수 있음. 
console.log(typeof parseInt(age)); // number
// 질문.. 프롬프트에 "skdjhfkshfksjd" 와 같이 스트링 value를 넣어도 typeof에서 number가 나오는 이유는?
// => parseInt를 할 경우엔 무조건 number만 나온다는 정보성이 되는건지?
const ageQuestion = parseInt(prompt('How old are you?'));
// isNaN => 리턴타입 boolean
if(isNaN(ageQuestion)) {
    alert("plz write down your age number");
} else {
    alert("your age is " + age);
}