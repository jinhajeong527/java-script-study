// 모던 자바스크립트에서 다양한 인자를 갖고 싶으면 
// REST OPERATOR를 사용할 수 있다. 

function sum (discount, ...prices) { // spread operator 랑은 다르다.
    console.log(prices);
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));// rest operator는 맨 마지막에 작성되어야 한다.
