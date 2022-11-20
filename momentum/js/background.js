const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// Create HTML from java script
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;
document.body.appendChild(backgroundImage);
