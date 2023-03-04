// 전역 함수
function foo() {
    console.log('global function foo');
}
function bar() {
    // 중첩 함수
    function foo() {
        console.log('local function foo');
    }
    foo();
}
bar();
// 위 예제의 모든 함수는 함수 이름과 동일한 이름의 식별자에 할당된다.
// 위에서 foo 함수를 호출하면 자바스크립트 엔진은 함수를 호출하기 위해 먼저 함수를 가리키는 식별자 foo를 검색한다.
