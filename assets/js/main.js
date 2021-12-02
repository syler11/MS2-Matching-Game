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

function loadEasyGame() {
    displayGame();
}