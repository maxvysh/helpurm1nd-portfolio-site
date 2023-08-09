const artElement = document.getElementById('art');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

const art = [
    "css/zach_kyle_shangri_la_HUM1__2.jpg",
    "css/ZACH_KYLE_GOOD_LIVIN_412022.jpg"
    // Add more art links here
];

const titles = [
    "'shangri-la'",
    "'good livin'"
    // Add more titles here
];

const descriptions = [
    "album 2023",
    "single 2022"
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