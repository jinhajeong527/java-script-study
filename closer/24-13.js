const Counter = (function() {
    // 카운트 상태 변수
    // 즉시 실행 함수 내에서 선언된 num 변수는 인스턴스를 통해 접근할 수 없으며, 즉시 실행 함수 외부에서도 접근할 수 없는 은닉된 변수다.
    let num = 0;
    function Counter() {
    }
    Counter.prototype.increase = function() {
        return ++num;
    };
    Counter.prototype.decrease = function() {
        return num > 0 ? --num : 0;
    };
    return Counter;
}());

const counter = new Counter();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());