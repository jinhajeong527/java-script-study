function interest(principal, rate, years) {
    // default value를 설정하고 싶다면?
    // rate가 truthy 하면 사용하고 그렇지 않으면 3.5
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest(10000));

// ES6를 통해 소개된 더 깔끔한 방법이 있다..!
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
// 인자에 디폴트 값을 넣을 것이라면 디폴트 값을 설정할 인자를 맨 마지막에 두거나
// 아니면 순서를 제일 마지막으로 하는 것이 best practice 이다.
// undefined를 넣는 방법도 있겠지만 실제 함수가 작성된 것을 봐야 어떤 용도인지 확인할 수 
// 있는지 알수 있기 때문에 좋은 방법이 아니다. 
