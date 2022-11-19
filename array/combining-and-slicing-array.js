const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const slice = combined.slice(2, 4);
const slice2 = combined.slice(2);
const slice3 = combined.slice();

console.log(combined);
console.log(slice);

// 알고 있을 점은 primitive value를 사용할 경우
// will be copied into the target array
// object이면 reference가 copy됨
// 따라서 같은 오브젝트를 가리킨다는 뜻이 된다.

const firstObject = [ { id: 1 } ];
// 레퍼런스 타입.
const combined2 = firstObject.concat(second);
firstObject.id = 10;
const slice4 = combined2.slice();
console.log(combined2);
console.log(slice4);// 둘다 10으로 바뀌어있다.
