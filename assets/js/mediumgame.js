/* This statement will make sure only 12 cards will be displayed */
const animalCardMedium = animalCards.slice(0,12);

document.getElementById('medium-game').addEventListener('click', loadMediumGame);

document.getElementById('mediumLevel').addEventListener('click', loadMediumGame);


/* Loading the game after selecting the level on the index page */
function loadMediumGame() {
    displayGame();
    launchGameBoardMedium();
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    setInterval(setTimer, 800);
}

var animalCardMediumSelected = [];
var animalCardMediumSelectedId = [];
var animalCardMediumCorrect = [];

/* Creating gameboard with showing back of the card */
function launchGameBoardMedium() {
    animalCardMedium.sort(() => 0.5 - Math.random());
    for (let i = 0; i < animalCardMedium.length; i++) {
        var animalCardMed = document.createElement('img');
        animalCardMed.setAttribute('src', './assets/images/question-mark.png');
        animalCardMed.setAttribute('data-id', i);
        animalCardMed.setAttribute('alt', 'Card back, select to turn');
        animalCardMed.classList.add('col-4', 'col-lg-2', 'animalCard'); /* Use this to resize the gameBoard area */
        animalCardMed.addEventListener('click', turnAnimalCardMedium);
        gameGrid.appendChild(animalCardMed);
    }
}

/* Turns cards by clicking  Credit: Ania Kubow */
function turnAnimalCardMedium() {
    var animalCardMediumId = this.getAttribute('data-id');
    animalCardsMediumSelected.push(animalCardMedium[animalCardMediumId].name);
    animalCardsMediumSelectedId.push(animalCardId);
    this.setAttribute('alt', animalCardMedium[animalCardMediumId].name);
    this.setAttribute('src', animalCardMedium[animalCardMediumId].img);

    if (animalCardsMediumSelected.length === 2) {
        setTimeout(checkMatch, 300);
    } else if (animalCardsMediumSelected.length > 2) {
        this.setAttribute('src', './assets/images/question-mark.png');
    }
    /* Limits card turns to two before it turn back unless they are a match */
    animalCardsMediumSelected.length = Math.min(animalCardsMediumSelected.length, 2);
}

function checkMatchMedium() {
    var animalCardMedium = document.querySelectorAll('img');
    const animalCardFirst = animalCardsSelectedId[0];
    const animalCardSecond = animalCardsSelectedId[1];

    if (animalCardsSelected[0] === animalCardsSelected[1] && animalCardFirst !== animalCardSecond) {
        animalCardsCorrect.push(animalCardsSelected);
        stepsCounter();
        animalCardMedium[animalCardFirst].removeEventListener("click", turnAnimalCard);
        animalCardMedium[animalCardSecond].removeEventListener("click", turnAnimalCard);
        animalCardMedium[animalCardFirst].classList.add('match');
        animalCardMedium[animalCardSecond].classList.add('match');
    } else {
        stepsCounter();
        setTimeout(changeCardBack, 600); /* Set time how long the two cards would show to users before they turn back unless they are a match */
        function changeCardBack() {
            animalCardMedium[animalCardFirst].setAttribute('src', './assets/images/question-mark.png');
            animalCardMedium[animalCardSecond].setAttribute('src', './assets/images/question-mark.png');
            animalCardMedium[animalCardFirst].setAttribute('alt', 'Card back, select to turn');
            animalCardMedium[animalCardSecond].setAttribute('alt', 'Card back, select to turn');
        };
    }
    animalCardsSelected = [];
    animalCardsSelectedId = [];
    scoreCount.textContent = animalCardsCorrect.length;
    if (animalCardsCorrect.length === animalCards.length / 2) {
        setTimeout(correctMatch, 200);
    }

}

/* Reloading the game with Reload button or Level seletor */
document.getElementById('reload').addEventListener('click', resetGame);
document.getElementById('mediumLevel').addEventListener('click', resetGame);

function resetMediumGame() {
    animalCardsSelected = [];
    animalCardsSelectedId = [];
    animalCardsCorrect = [];
    cards = document.querySelectorAll('img');
    animalCardMedium.sort(() => 0.5 - Math.random());
    cards.forEach((c) => {
        c.setAttribute('src', './assets/images/question-mark.png');
        c.addEventListener('click', turnAnimalCard);
        c.classList.remove('match');
    });
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    resetTimer();
}
/* Resetting timer */
function resetTimer() {
    document.getElementById('seconds').innerHTML = `00`;
    document.getElementById('minutes').innerHTML = `00`;
    totalSeconds = `0`;
}