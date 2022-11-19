// 쇼핑카트에 담은 상품의 가격이라고 생각하면 된다.
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) sum += n;
console.log(sum); // => 5

// reduce() 메서드를 사용하면 더 깔끔하게 작성할 수 있다.
// 두개의 파라미터를 받는 call back function 있음
// accumulator, currentValue
const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // 내부적으로 결과를 accumulator에 저장해 놓는다.
}, 0); // accumulator 0으로 초기화 한 것이다.
// 배열의 모든 value를 single value로 리턴할 수 있게 해준다.
console.log(sum2); // => 5

// 더 짧은 코드
const sum3 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // 내부적으로 결과를 accumulator에 저장해 놓는다.
}); // 이렇게 할경우 accumulator의 초기값이 배열의 첫번째 인텍스에 있는 1이 될 것이다.
// => 싱글 라인일 경우에 리턴 키워드도 제외할 수 있다. 
// This is how reduction algorithm works...!