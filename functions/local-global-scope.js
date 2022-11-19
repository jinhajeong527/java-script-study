const message = 'hi';
console.log(message);
// const가 함수 안에 선언되어 있기 때문에 
// 밖에서 접근할 수 없다. 
function start() {
    const message = 'hi';
}
