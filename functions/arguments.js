let x = 1;
x = 'a';
// argument object를 사용한다면 굳이 인자를 적어주지 않아도 된다.

function sum() {
    let total = 0;
    for(let value of arguments)// iterator가 있으면 다 for문 쓸 수 있다.
        total += value; 
    console.log(arguments);
    return total;
}
// 자바 스크립트에서는 function이 두 개의 파라미터라도
// 한 개의 인자만 던지는 것이 가능하다. 이 때 b는 디폴트로 undefined가 
// 되기 때문에, 아래의 경우 NaN이 출력된다.  (not a number)
console.log(sum(1));
console.log(sum());// NaN
console.log(sum(1, 2, 3, 4, 5)) // 3
// 처음 두개의 인자만 사용되기 때문에 3을 리턴한다. 
// 원하는 만큼 arguments를 던지고 싶으면??
// arguments라는 special object가 있음
// arg를 인덱스를 키로 갖는 배열과, 
// callee(방금 실행된 함수)
// length

