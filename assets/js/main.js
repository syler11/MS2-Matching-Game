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

/* Creating gameboard with showing back of the card */

const gameGrid = document.querySelector('#gameBoard');
var animalCardsSelected = [];
var animalCardsSelectedId = [];

function launchGameBoard() {
    animalCards.sort(() => 0.5 - Math.random());
    for (let i = 0; i < animalCards.length; i++) {
        var animalCard = document.createElement('img');
        animalCard.setAttribute('src', './assets/images/question-mark.png');
        animalCard.setAttribute('data-id', i);
        animalCard.setAttribute('alt', 'Card back, select to flip over');
        animalCard.classList.add('col-4', 'col-lg-2', 'animalCard');
        animalCard.addEventListener('click', turnAnimalCard);
        gameGrid.appendChild(animalCard);
    }
}

/* Turns cards by clicking */
function turnAnimalCard() {
    var animalCardId = this.getAttribute('data-id');
    animalCardsSelected.push(animalCards[animalCardId].name);
    animalCardsSelectedId.push(animalCardId);
}

/* Game timer */

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
/* Loading the game after selecting the level on the index page */
function loadEasyGame() {
    displayGame();
    launchGameBoard();
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    setInterval(setTimer, 1200);
}


/* Reloading the game */
document.getElementById('reload').addEventListener('click', resetGame);

function resetGame() {
    resetTimer();
}
/* Resetting timer */ 
function resetTimer() {
    document.getElementById('seconds').innerHTML = `00`;
    document.getElementById('minutes').innerHTML = `00`;
    totalSeconds = `0`;
}