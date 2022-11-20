const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// Create HTML from java script
const backgroundImage = document.createElement("img");
// property에 값 넣어줌.
backgroundImage.src = `img/${chosenImage}`;
// body에 어펜드 하면 뒤에 붙이게 된다.
document.body.appendChild(backgroundImage);
