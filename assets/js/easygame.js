/* This statement will make sure only 6 cards will be displayed */
const animalCardEasy = animalCards.slice(0, 6);

/* Button wil initiate the launch of the easy level game */
document.getElementById('easy-game').addEventListener('click', loadEasyGame);

/* Variables for easy level game */
var animalCardEasySelected = [];
var animalCardEasySelectedId = [];
var animalCardEasyCorrect = [];
const gameEasyGrid = document.querySelector('#gameBoard');

/* Loading the game after selecting the level on the index page */
function loadEasyGame() {
    displayGame();
    launchGameBoardEasy();
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    setInterval(setTimer, 800);
}

/* Creating gameboard with showing back of the card Credit: Ania Kubow */
function launchGameBoardEasy() {
    animalCardEasy.sort(() => 0.5 - Math.random());
    for (let i = 0; i < animalCardEasy.length; i++) {
        var animalCardEazy = document.createElement('img');
        animalCardEazy.setAttribute('src', './assets/images/question-mark.png');
        animalCardEazy.setAttribute('data-id', i);
        animalCardEazy.setAttribute('alt', 'Card back, select to turn');
        animalCardEazy.classList.add('col-4', 'col-lg-2', 'animalCard'); /* Use this to resize the gameBoard area */
        animalCardEazy.addEventListener('click', turnAnimalCardEasy);
        gameEasyGrid.appendChild(animalCardEazy);
    }
}

/* Turns cards by clicking  Credit: Ania Kubow */
function turnAnimalCardEasy() {
    var animalCardEasyId = this.getAttribute('data-id');
    animalCardEasySelected.push(animalCardEasy[animalCardEasyId].name);
    animalCardEasySelectedId.push(animalCardEasyId);
    this.setAttribute('alt', animalCardEasy[animalCardEasyId].name);
    this.setAttribute('src', animalCardEasy[animalCardEasyId].img);

    if (animalCardEasySelected.length === 2) {
        setTimeout(checkMatchEasy, 300);
    } else if (animalCardEasySelected.length > 2) {
        this.setAttribute('src', './assets/images/question-mark.png');
    }
    /* Limits card turns to two before it turn back unless they are a match */
    animalCardEasySelected.length = Math.min(animalCardEasySelected.length, 2);
}

/* Checks whether the turned cards are a match or not. 
If yes and cards will stick if noy they will turn back. 
In the meantime it wil records the steps and score */
function checkMatchEasy() {
    var animalCardEasy = document.querySelectorAll('img');
    const animalCardEasyFirst = animalCardEasySelectedId[0];
    const animalCardEasySecond = animalCardEasySelectedId[1];

    if (animalCardEasySelected[0] === animalCardEasySelected[1] && animalCardEasyFirst !== animalCardEasySecond) {
        animalCardEasyCorrect.push(animalCardEasySelected);
        stepsCounter();
        animalCardEasy[animalCardEasyFirst].removeEventListener("click", turnAnimalCardEasy);
        animalCardEasy[animalCardEasySecond].removeEventListener("click", turnAnimalCardEasy);
        animalCardEasy[animalCardEasyFirst].classList.add('match');
        animalCardEasy[animalCardEasySecond].classList.add('match');
    } else {
        stepsCounter();
        setTimeout(changeEasyCardBack, 400); /* Set time how long the two cards would show to users before they turn back unless they are a match */
        function changeEasyCardBack() {
            animalCardEasy[animalCardEasyFirst].setAttribute('src', './assets/images/question-mark.png');
            animalCardEasy[animalCardEasySecond].setAttribute('src', './assets/images/question-mark.png');
            animalCardEasy[animalCardEasyFirst].setAttribute('alt', 'Card back, select to turn');
            animalCardEasy[animalCardEasySecond].setAttribute('alt', 'Card back, select to turn');
        }
    }
    animalCardEasySelected = [];
    animalCardEasySelectedId = [];
    scoreCount.textContent = animalCardEasyCorrect.length;
    if (animalCardEasyCorrect.length === animalCardEasy.length / 2) {
        setTimeout(correctMatchEasy, 200);
    }
}

/* Display message to users when all cards has been revealed */
function correctMatchEasy() {
    alert('Well done you! Why not to try some of the other levels?');
    resetEasyGame();
}

/* Reloading the game with Reload button or Level seletor */
document.getElementById('reload').addEventListener('click', resetEasyGame);

function resetEasyGame() {
    animalCardEasySelected = [];
    animalCardEasySelectedId = [];
    animalCardEasyCorrect = [];
    cards = document.querySelectorAll('img');
    animalCardEasy.sort(() => 0.5 - Math.random());
    cards.forEach((c) => {
        c.setAttribute('src', './assets/images/question-mark.png');
        c.addEventListener('click', turnAnimalCardEasy);
        c.classList.remove('match');
    });
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    resetTimer();
}

/* Function clear the gameBoard and reload the selected game level 
Credit to Stackoverflow (clearing div content) Line 118-126 */
document.getElementById('easyLevel').addEventListener("click", clearContentEasy)

/**
 * @param {function} gameBoard index.html div section where the game is displayed
 */
function clearContentEasy(gameBoard) {
    document.getElementById('gameBoard').innerHTML = "";
    launchGameBoardEasy();
    resetTimer();
}