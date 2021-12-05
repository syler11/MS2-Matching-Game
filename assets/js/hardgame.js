

/* Loading the game after selecting the level on the index page */
function loadEasyGame() {
    displayGame();
    launchGameBoard();
    stepsCount.innerHTML = `0`;
    scoreCount.innerHTML = `0`;
    setInterval(setTimer, 800);
}

var animalCardsSelected = [];
var animalCardsSelectedId = [];
var animalCardsCorrect = [];

/* Creating gameboard with showing back of the card */
function launchGameBoard() {
    animalCards.sort(() => 0.5 - Math.random());
    for (let i = 0; i < animalCards.length; i++) {
        var animalCard = document.createElement('img');
        animalCard.setAttribute('src', './assets/images/question-mark.png');
        animalCard.setAttribute('data-id', i);
        animalCard.setAttribute('alt', 'Card back, select to turn');
        animalCard.classList.add('col-4', 'col-lg-2', 'animalCard'); /* Use this to resize the gameBoard area */
        animalCard.addEventListener('click', turnAnimalCard);
        gameGrid.appendChild(animalCard);
    }
}

/* Turns cards by clicking  Credit: Ania Kubow */
function turnAnimalCard() {
    var animalCardId = this.getAttribute('data-id');
    animalCardsSelected.push(animalCards[animalCardId].name);
    animalCardsSelectedId.push(animalCardId);
    this.setAttribute('alt', animalCards[animalCardId].name);
    this.setAttribute('src', animalCards[animalCardId].img);

    if (animalCardsSelected.length === 2) {
        setTimeout(checkMatch, 300);
    } else if (animalCardsSelected.length > 2) {
        this.setAttribute('src', './assets/images/question-mark.png');
    }
    /* Limits card turns to two before it turn back unless they are a match */
    animalCardsSelected.length = Math.min(animalCardsSelected.length, 2);
}

function checkMatch() {
    var animalCards = document.querySelectorAll('img');
    const animalCardFirst = animalCardsSelectedId[0];
    const animalCardSecond = animalCardsSelectedId[1];

    if (animalCardsSelected[0] === animalCardsSelected[1] && animalCardFirst !== animalCardSecond) {
        animalCardsCorrect.push(animalCardsSelected);
        stepsCounter();
        animalCards[animalCardFirst].removeEventListener("click", turnAnimalCard);
        animalCards[animalCardSecond].removeEventListener("click", turnAnimalCard);
        animalCards[animalCardFirst].classList.add('match');
        animalCards[animalCardSecond].classList.add('match');
    } else {
        stepsCounter();
        setTimeout(changeCardBack, 600); /* Set time how long the two cards would show to users before they turn back unless they are a match */
        function changeCardBack() {
            animalCards[animalCardFirst].setAttribute('src', './assets/images/question-mark.png');
            animalCards[animalCardSecond].setAttribute('src', './assets/images/question-mark.png');
            animalCards[animalCardFirst].setAttribute('alt', 'Card back, select to turn');
            animalCards[animalCardSecond].setAttribute('alt', 'Card back, select to turn');
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
document.getElementById('easyLevel').addEventListener('click', resetGame);

function resetGame() {
    animalCardsSelected = [];
    animalCardsSelectedId = [];
    animalCardsCorrect = [];
    cards = document.querySelectorAll('img');
    animalCards.sort(() => 0.5 - Math.random());
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