/* This statement will make sure only 12 cards will be displayed */
const animalCardMedium = animalCards.slice(0, 12);

/* Button wil initiate the launch of the medium level game */
document.getElementById('medium-game').addEventListener('click', loadMediumGame);

/* Variables for medium level game */
var animalCardMediumSelected = [];
var animalCardMediumSelectedId = [];
var animalCardMediumCorrect = [];
const gameMediumGrid = document.querySelector('#gameBoard');

/* Loading the game after selecting the level on the index page */
function loadMediumGame() {
    displayGame();
    launchGameBoardMedium();
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    setInterval(setTimer, 800);
}

/* Creating gameboard with showing back of the card Credit: Ania Kubow */
function launchGameBoardMedium() {
    animalCardMedium.sort(() => 0.5 - Math.random());
    for (let i = 0; i < animalCardMedium.length; i++) {
        var animalCardMed = document.createElement('img');
        animalCardMed.setAttribute('src', './assets/images/question-mark.png');
        animalCardMed.setAttribute('data-id', i);
        animalCardMed.setAttribute('alt', 'Card back, select to turn');
        animalCardMed.classList.add('col-4', 'col-lg-2', 'animalCard'); /* Use this to resize the gameBoard area */
        animalCardMed.addEventListener('click', turnAnimalCardMedium);
        gameMediumGrid.appendChild(animalCardMed);
    }
}

/* Turns cards by clicking  Credit: Ania Kubow */
function turnAnimalCardMedium() {
    var animalCardMediumId = this.getAttribute('data-id');
    animalCardMediumSelected.push(animalCardMedium[animalCardMediumId].name);
    animalCardMediumSelectedId.push(animalCardMediumId);
    this.setAttribute('alt', animalCardMedium[animalCardMediumId].name);
    this.setAttribute('src', animalCardMedium[animalCardMediumId].img);

    if (animalCardMediumSelected.length === 2) {
        setTimeout(checkMatchMedium, 300);
    } else if (animalCardMediumSelected.length > 2) {
        this.setAttribute('src', './assets/images/question-mark.png');
    }
    /* Limits card turns to two before it turn back unless they are a match */
    animalCardMediumSelected.length = Math.min(animalCardMediumSelected.length, 2);
}

/* Checks whether the turned cards are a match or not. If yes and cards will stick if noy they will turn back. In the meantime it wil records the steps and score */
function checkMatchMedium() {
    var animalCardMediumImg = document.querySelectorAll('img');
    const animalCardMediumFirst = animalCardMediumSelectedId[0];
    const animalCardMediumSecond = animalCardMediumSelectedId[1];

    if (animalCardMediumSelected[0] === animalCardMediumSelected[1] && animalCardMediumFirst !== animalCardMediumSecond) {
        animalCardMediumCorrect.push(animalCardMediumSelected);
        stepsCounter();
        animalCardMediumImg[animalCardMediumFirst].removeEventListener("click", turnAnimalCardMedium);
        animalCardMediumImg[animalCardMediumSecond].removeEventListener("click", turnAnimalCardMedium);
        animalCardMediumImg[animalCardMediumFirst].classList.add('match');
        animalCardMediumImg[animalCardMediumSecond].classList.add('match');
    } else {
        stepsCounter();
        setTimeout(changeMediumCardBack, 600); /* Set time how long the two cards would show to users before they turn back unless they are a match */
        function changeMediumCardBack() {
            animalCardMediumImg[animalCardMediumFirst].setAttribute('src', './assets/images/question-mark.png');
            animalCardMediumImg[animalCardMediumSecond].setAttribute('src', './assets/images/question-mark.png');
            animalCardMediumImg[animalCardMediumFirst].setAttribute('alt', 'Card back, select to turn');
            animalCardMediumImg[animalCardMediumSecond].setAttribute('alt', 'Card back, select to turn');
        }
    }
    animalCardMediumSelected = [];
    animalCardMediumSelectedId = [];
    scoreCount.textContent = animalCardMediumCorrect.length;
    if (animalCardMediumCorrect.length === animalCardMedium.length / 2) {
        setTimeout(correctMatchMedium, 200);
    }
}

/* Display message to users when all cards has been revealed */
function correctMatchMedium() {
    alert('Well done you! Why not to try some of the other levels?');
    resetMediumGame();
}

/* Reloading the game with Reload button or Level seletor */
document.getElementById('reload').addEventListener('click', resetMediumGame);

function resetMediumGame() {
    animalCardMediumSelected = [];
    animalCardMediumSelectedId = [];
    animalCardMediumCorrect = [];
    cards = document.querySelectorAll('img');
    animalCardMedium.sort(() => 0.5 - Math.random());
    cards.forEach((c) => {
        c.setAttribute('src', './assets/images/question-mark.png');
        c.addEventListener('click', turnAnimalCardMedium);
        c.classList.remove('match');
    });
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    resetTimer();
}

/* Function clear the gameBoard and reload the selected game level Credit to Stackoverflow (clearing div content) */
document.getElementById('mediumLevel').addEventListener("click", clearContentMedium)

/**
 * @param {function} gameBoard index.html div section where the game is displayed
 */
function clearContentMedium(gameBoard) {
    document.getElementById('gameBoard').innerHTML = "";
    launchGameBoardMedium();
}