const numbers = [2, 3, 1];

numbers.sort();
console.log(numbers); // 1, 2, 3

// numbers나 strings가 배열에 있을 때 사용하기 좋은 방법이다.
numbers.reverse();
console.log(numbers) // 3, 2, 1

const courses = [
    {id:1, name:'Node.js'},
    {id:2, name:'JavaScript'}
];
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    // 해당하면 바로 return 할 것이기 때문에
    // else if문을 쓸 필요가 없다. 
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses); 
// java script가 먼저 올 것이다

// sort에 비교에 사용되는 function을 인자로 넣을 수 있다.
// ascii => american standard code for information interchage
