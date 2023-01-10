const circle =  {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
// in
// 해당 오브젝트의 모든 프로퍼티와 메서드를 iterate over 할 수 있음
for(let key in circle) {
    console.log(key, circle[key]);
}

// of
// map, Array가 iterable 하다.
// for(let key of circle) {
//     console.log(key); // circle is not iterable 에러 반환한다.
// }

for(let key of Object.keys(circle)) {
    console.log(key);
}

// Object: Built In Constructor Function
// 우리가 오브젝트 생성할 때마다 (오브젝트 리터럴 문법 사용해서)
// 내부적으로 function Object() {} 를 호출하는 것으로 translated 된다.
// const x = { value:1 }
// const x = new Object();

for(let entry of Object.entries(circle)) {
    console.log(entry); //=> key-value pair
}

// 해당 프로퍼티가 있는지 확인하고 싶다면?
if('radius' in circle) {
    console.log('yes');
}
if('color' in circle) {
    console.log('yes');
}