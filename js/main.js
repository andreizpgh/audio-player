const range = document.querySelector(".range");
const audio = document.querySelector(".audio");
const playButton = document.querySelector(".playButton");

audio.onloadedmetadata = function() {
    range.max = audio.duration;
    range.value = audio.currentTime;
}

function playPause() {
    if (playButton.classList.contains("--active")) {
        audio.pause();
        playButton.classList.remove("--active");
    }
    else {
        audio.play();
        playButton.classList.add("--active");
    }
}

if (audio.play()) {
    setInterval(() => {
        range.value = audio.currentTime;
    }, 500)
}

range.onchange = function() {
    audio.play();
    audio.currentTime = range.value;
    playButton.classList.add("--active");
}

const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const cover = document.querySelector(".cover");
const title = document.querySelector(".title");

const playlist = [
    '1.mp3',
    '2.mp3',
    '3.mp3'
]

let treck;
 
window.onload = function() {
    treck = 0;
    cover.classList.add("--0");
    title.classList.add("--0");
    document.body.classList.add("--0");
}

function switchTreck(numTreck) {
    audio.src = './audio/' + playlist[numTreck];
    audio.play();
    playButton.classList.add("--active");
}

function toPrev() {
    if (treck > 0) {
        cover.classList.remove(`--${treck}`);
        title.classList.remove(`--${treck}`);
        document.body.classList.remove(`--${treck}`);
        treck--;
        switchTreck(treck);
    } 
    else {
        cover.classList.remove(`--${treck}`);
        title.classList.remove(`--${treck}`);
        document.body.classList.remove(`--${treck}`);
        treck = 2;
        switchTreck(treck);
    }
    cover.classList.add(`--${treck}`);
    title.classList.add(`--${treck}`);
    document.body.classList.add(`--${treck}`);
}

function toNext() {
    if (treck < 2) { 
        cover.classList.remove(`--${treck}`);
        title.classList.remove(`--${treck}`);
        document.body.classList.remove(`--${treck}`);
        treck++;
        switchTreck(treck);
    } 
    else {
        cover.classList.remove(`--${treck}`);
        title.classList.remove(`--${treck}`);
        document.body.classList.remove(`--${treck}`);
        treck = 0;
        switchTreck(treck);
    }
    cover.classList.add(`--${treck}`);
    title.classList.add(`--${treck}`);
    document.body.classList.add(`--${treck}`);
}
