const titleElement = document.getElementById('dynamicTitle');
const titles = [
  "help",
  "ur",
  "m1nd",
  // Add more title options here
];

let currentIndex = 0;

function changeTitle() {
  titleElement.textContent = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
}

// Change the title every 2 seconds (adjust the interval as needed)
setInterval(changeTitle, 2000);