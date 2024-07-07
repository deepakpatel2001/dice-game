// Player selection
const firstPlayer = prompt('Enter First Player Name') || 'Player 0';
const secondPlayer = prompt('Enter Second Player Name') || 'Player 1';

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const diceImage = document.querySelector('.dice');
const playerName1 = document.querySelector('.name1');
const playerName2 = document.querySelector('.name2');

playerName1.textContent = firstPlayer;
playerName2.textContent = secondPlayer;

// Player's total score
const playerOneTotal = document.querySelector('#score--0');
const playerTwoTotal = document.querySelector('#score--1');
let playerOneTotalNum = 0;
let playerTwoTotalNum = 0;

// Player's temp score
const playerTempOne = document.querySelector('#current--0');
const playerTempTwo = document.querySelector('#current--1');
let playerTempOneNumber = 0;
let playerTempTwoNumber = 0;

// All buttons
const reset = document.querySelector('.btn--new');
const roller = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// Function to switch player
const switchPlayer = () => {
    playerTempOneNumber = 0;
    playerTempTwoNumber = 0;
    playerTempOne.textContent = playerTempOneNumber;
    playerTempTwo.textContent = playerTempTwoNumber;
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
};

// Function to update scores
const updateScore = (playerTotal, playerTemp) => {
    playerTotal += playerTemp;
    return playerTotal;
};

// Function to check winner
const checkWinner = () => {
    if (playerOneTotalNum >= 100) {
        winner(playerOne);
    } else if (playerTwoTotalNum >= 100) {
        winner(playerTwo);
    }
};

// Function to declare winner
const winner = (player) => {
    player.classList.add('player--winner', 'name');
    roller.setAttribute('disabled', true);
    hold.setAttribute('disabled', true);
};

// Reset game
reset.addEventListener('click', () => {
    const confirmation = confirm('Really want to restart game?');
    if (confirmation) {
        playerOneTotalNum = 0;
        playerTwoTotalNum = 0;
        playerTempOneNumber = 0;
        playerTempTwoNumber = 0;
        playerOneTotal.textContent = playerOneTotalNum;
        playerTwoTotal.textContent = playerTwoTotalNum;
        playerTempOne.textContent = playerTempOneNumber;
        playerTempTwo.textContent = playerTempTwoNumber;
        roller.removeAttribute('disabled');
        hold.removeAttribute('disabled');
        playerOne.classList.remove('player--winner');
        playerTwo.classList.remove('player--winner');
        
        if (!playerOne.classList.contains('player--active')) {
            switchPlayer();
        }
    }
});

// Hold score
hold.addEventListener('click', () => {
    if (playerOne.classList.contains('player--active')) {
        playerOneTotalNum = updateScore(playerOneTotalNum, playerTempOneNumber);
        playerOneTotal.textContent = playerOneTotalNum;
    } else {
        playerTwoTotalNum = updateScore(playerTwoTotalNum, playerTempTwoNumber);
        playerTwoTotal.textContent = playerTwoTotalNum;
    }
    switchPlayer();
    checkWinner();
});

// Roll dice
roller.addEventListener('click', () => {
    let random = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `./images/dice-${random}.png`;

    if (random === 1) {
        switchPlayer();
    } else {
        if (playerOne.classList.contains('player--active')) {
            playerTempOneNumber += random;
            playerTempOne.textContent = playerTempOneNumber;
        } else {
            playerTempTwoNumber += random;
            playerTempTwo.textContent = playerTempTwoNumber;
        }
    }

    checkWinner();
});
