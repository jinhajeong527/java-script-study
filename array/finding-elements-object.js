const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

courses.includes({id : 1, name: 'a'});
// they are two diffenrent reference so false

courses.find(function name(course) {
    return course.name === 'a';
    // return course.name ==='xyz'; // undefined
}); // function을 넘겨야 한다.
// predicate이라고 한다.
// first element to match the criteria를 리턴하고 종료된다. 
// 찾는게 없으면 undefined를 리턴할 것이다.

// 찾는 요소의 인덱스를 리턴한다. 
courses.findIndex(function name(course) {
    return course.name === 'a';
});

