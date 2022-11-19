const sum = (arr) => {
    if(!Array.isArray(arr)) return;
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    return sum;
}
console.log(sum2([1,2,3,4]));
// 스프레드 오퍼레이터는 convert them all to an array
function sum2(...items) {// 인자 원하는 만큼 넣을 수 있다. 
    if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a,b) => a + b);
}

// 스프레드 오퍼레이터가 전부 배열로 바꿔버린다는 특성 때문에
// 배열을 인자로 넣더라도 또 다른 배열 안에 넣기 때문에 만약에
// [1,2,3,4]를 인자로 넣는다면 0번 인덱스의 값이 저 배열이 된다. 



