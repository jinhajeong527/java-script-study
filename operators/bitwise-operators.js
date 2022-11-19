// decimal system to represent number
// decimal to binary 
// 1 = 00000001
// 2 = 00000010
// R = 00000011 = 3
// bitwise operator : logical operator랑 비슷함
// 그렇지만 individual bits of number로 작동한다. 

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND
// R = 0000000

// real world example
// Read, Write, Execute
// 00000100 : only read permission
// 00000010 : write permission
// 00000001 : execute permission

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // 6


let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);// yes를 리턴할 것이다. 그렇지만
// myPermission에서 readPermission을 제외하면 no를 리턴할 것이다. 