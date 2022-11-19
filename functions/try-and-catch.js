const person = {
  firstName: "Jinha",
  lastName: "Jeong",
  // ES6에서 새롭게 소개한 오브젝트에 함수 추가하는 방법
  get fullName() {
    // getter
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter a first and last name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

//person.fullName = 'John Smith';
try {
  person.fullName = "";
} catch (e) {
  alert(e);
}
console.log(person);
