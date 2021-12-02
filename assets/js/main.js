/* Hide certain dom elements on page load */


    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('levelSelector').classList.add('no-display');
    document.getElementById('gameBoard').classList.add('no-display');
    document.getElementById('gameOutput').classList.add('no-display');
});

/* Hide and reveal certain dom elemtns once the game level is selected */

function displayGame() {
    document.getElementById('levelSelector').classList.remove('no-display');
    document.getElementById('gameBoard').classList.remove('no-display');
    document.getElementById('gameOutput').classList.remove('no-display');
    document.getElementById('howto-section').remove();
    document.getElementById('loadGame').remove();
}

document.getElementById('easy-game').addEventListener('click', loadEasyGame);
document.getElementById('medium-game').addEventListener('click', loadEasyGame);
document.getElementById('hard-game').addEventListener('click', loadEasyGame);

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
    
];

var totalSeconds = 0;

function setTimer(){
    ++totalSeconds; 
    var seconds = document.getElementById('seconds');
    seconds.innerHTML = pad(totalSeconds%60);
    var minutes = document.getElementById('minutes');
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val){
    var valString = val + '';
    if(valString.length < 2) {
        return '0' + valString;
    } else { return valString;
    }
}

function loadEasyGame() {
    displayGame();
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    setInterval(setTimer, 1200);
}

document.getElementById('reload').addEventListener('click', resetGame);

function resetGame() {
    resetTimer();
}

function resetTimer() {
    document.getElementById('seconds').innerHTML = `00`;
    document.getElementById('minutes').innerHTML = `00`;
    totalSeconds = `0`;
}