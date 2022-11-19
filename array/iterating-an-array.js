const numbers = [1, 2, 3];

for (let number of numbers) {
  console.log(number);
}

// callback function 포함한다.
numbers.forEach((number, index) => {
  console.log(number, index);
});
