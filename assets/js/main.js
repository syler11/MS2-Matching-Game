//To keep the code relatively short Arrays, Global variables and functions were moved to main.js leaving a much tidier code for game function. 


/* Animal card array */

const animalCards = [
    { name: 'dog', img: './assets/images/dog.png', },
    { name: 'dog', img: './assets/images/dog.png', },
    { name: 'cat', img: './assets/images/cat.png', },
    { name: 'cat', img: './assets/images/cat.png', },
    { name: 'turtle', img: './assets/images/turtle.png', },
    { name: 'turtle', img: './assets/images/turtle.png', },
    { name: 'lion', img: './assets/images/lion.png', },
    { name: 'lion', img: './assets/images/lion.png', },
    { name: 'elephant', img: './assets/images/elephant.png', },
    { name: 'elephant', img: './assets/images/elephant.png', },
    { name: 'giraffe', img: './assets/images/giraffe.png', },
    { name: 'giraffe', img: './assets/images/giraffe.png', },
    { name: 'kangaroo', img: './assets/images/kangaroo.png', },
    { name: 'kangaroo', img: './assets/images/kangaroo.png', },
    { name: 'frog', img: './assets/images/frog.png', },
    { name: 'frog', img: './assets/images/frog.png', },
    { name: 'monkey', img: './assets/images/monkey.png', },
    { name: 'monkey', img: './assets/images/monkey.png', },

];

/* Function added to avoid two a href link on the same page - Credit to www.stackoverflow.com */
document.getElementById("easyLevel").addEventListener("click", gotoContactPage);

function gotoContactPage() {
    window.location.assign("https://syler11.github.io/MS2-Matching-Game/contact.html");

}

/* Hide certain dom elements on page load */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('levelSelector').classList.add('no-display');
    document.getElementById('gameBoard').classList.add('no-display');
    document.getElementById('gameOutput').classList.add('no-display');
});




/* Global variable declared */
const stepsCount = document.querySelector('#stepsCount');
const scoreCount = document.querySelector('#scoreCount');

/* Game timer */

var totalSeconds = 0;

function setTimer() {
    ++totalSeconds;
    var seconds = document.getElementById('seconds');
    seconds.innerHTML = pad(totalSeconds % 60);
    var minutes = document.getElementById('minutes');
    minutes.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + '';
    if (valString.length < 2) {
        return '0' + valString;
    } else {
        return valString;
    }
}

/* Steps counter */
function stepsCounter() {
    stepsCount.innerHTML++;
}

/* Resetting timer */
function resetTimer() {
    document.getElementById('seconds').innerHTML = `00`;
    document.getElementById('minutes').innerHTML = `00`;
    totalSeconds = `0`;
}