const circle =  {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Copying Object : Old Way......
const another = {};

for(let key in circle) {
    another[key] = circle[key];
}

console.log(another);


// We have better ways to achieve the same thing
// 첫번째 인자 : Target Object, 두번째 인자 : Source Object
const another2 = Object.assign({}, circle);
console.log(another2); // {radius: 1, draw: ƒ}
// 꼭 Empty Object를 넣어줄 필요는 없다.
// 존재하는 오브젝트여도 괜찮다.

const another3 = Object.assign({
    color:'yellow'
}, circle);

console.log(another3); //{color: 'yellow', radius: 1, draw: ƒ} 

// 스프레드 Operator
const another4 = { ...circle };
// circle 오브젝트 안의 모든 프로퍼티 및 메서드를 가져와서 {} 안에 둔다.
console.log(another4);




