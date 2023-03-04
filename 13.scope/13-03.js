var x = 'global';
function foo() {
    var x = 'local';
    console.log(x);
}
foo(); // local
console.log(x); // global
// 식별자 이름이 동일하지만 자신이 유효한 범위, 즉 스코프가 다른 별개의 변수