// how we can organize our data! 
let selectedColors = ['red', 'blue', 'green'];
selectedColors[2] = 1;
console.log(selectedColors);

const tag = "tagInfo";
const nonsense = [1, 2, "hello", true, undefined, false, "jinha", null, tag];
console.log(nonsense);

// Add one more item to the array
nonsense.push('jeong');
console.log(nonsense);

const toBuy = ["sandwitch", "bread", "greek yogurt"];
toBuy.push("kimbab");
toBuy.push("blueberry");

console.log(toBuy[13123123]); // undefined