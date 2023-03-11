let foo = 1; // 전역 변수
{
    console.log(foo);
    let foo = 2; // Uncaught ReferenceError: Cannot access 'foo' before initialization
}