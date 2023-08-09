const artElement = document.getElementById('art');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

const art = [
    "css/h_man_h_man.png",
    "css/billboardthang.png"
    // Add more art links here
];

const titles = [
    "'h-man walk with me edition'",
    "'h-man walk with me edition'"
    // Add more titles here
];

const descriptions = [
    "2023",
    "2023"
    // Add more descriptions here
];

let currentIndex = 0;

function updateArt() {
    artElement.classList.toggle('fade');
    setTimeout(function(){
        artElement.src = art[currentIndex];
        artElement.classList.toggle('fade');
        titleElement.textContent = titles[currentIndex];
        descriptionElement.textContent = descriptions[currentIndex];
    }, 300);
}

function rightArrow() {
    if (currentIndex == art.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateArt();
}

function leftArrow() {
    if (currentIndex == 0) {
        currentIndex = art.length - 1;
    } else {
        currentIndex--;
    }
    updateArt();
}