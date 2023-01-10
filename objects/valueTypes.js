let x = 10;
let y = x;
x = 20;
// Primitives are copied by value

let z = {value:10};
let k = z;
z.value = 20;
// Objects are copied by their reference


let number = 10;
const increase = (number) => {
    // number에 해당 값 10이 카피돼서 local variable이 된다.
    number++; // 다른 number 변수와 독립적이다.
}

increase(number);
console.log(number); // 10 

let numberObject = {value:10};

const increaseObjectValue = (numberObject) => {
    numberObject.value++;
}

increaseObjectValue(numberObject);
console.log(numberObject); // {value:11}
// Pass By Reference
// 오브젝트는 레퍼런스를 던진다.
// 즉 increaseObjectValue 안의 지역 변수는 같은 오브젝트를 가리키게 된다. 
