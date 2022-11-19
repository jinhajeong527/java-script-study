const person = {
    firstName : 'Jinha',
    lastName : 'Jeong',
    // fullName : function() {}
    // ES6에서 새롭게 소개한 오브젝트에 함수 추가하는 방법
    get fullName() { // getter
        return `${person.firstName} ${person.lastName}`;
    }, 
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//console.log(person.fullName()); 
// 이슈 1: read only
// 이슈 2 : 프로퍼티처럼 호출하고 싶다면? 메서드 처럼 말고..
// this is where getter and setters come into picture...

// getters => access properties..
// setters => change (mutate) them.. 
person.fullName = 'John Smith';
console.log(person);




