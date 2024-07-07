// player selection

const firstPlayer = prompt('Enter First Player Name') || 'Player 0';
const secondPlayer = prompt('Enter Second Player Name') || 'Player 1';

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const diceImage = document.querySelector('.dice');
let activeClass = document.querySelector('.player--active');
const playerName1 = document.querySelector('.name1');
const playerName2 = document.querySelector('.name2');

// player's total score
const playerOneTotal = document.querySelector('#score--0');
const playerTwoTotal = document.querySelector('#score--1');
let playerOneTotalNum = Number(playerOneTotal.textContent);
let playerTwoTotalNum = Number(playerTwoTotal.textContent);

// player's temp score
const playerTempOne = document.querySelector('#current--0');
const playerTempTwo = document.querySelector('#current--1');
let playerTempOneNumber = Number(playerTempOne.textContent);
let playerTempTwoNumber = Number(playerTempTwo.textContent);

// all buttons
const reset = document.querySelector('.btn--new');
const roller = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// main logic starting here:-

reset.addEventListener('click', () => {
    const confirmation = confirm("Really wants to restart game?")

    if (confirmation){
        if (playerTwo.classList.contains('player--active')) {
            playerTwo.classList.remove('player--active');
            playerOne.classList.add('player--active');
        }
        playerTempOneNumber = 0;
        playerTempOne.textContent = playerTempOneNumber;
        playerTempTwoNumber = 0;
        playerTempTwo.textContent = playerTempTwoNumber;

        playerOneTotalNum = 0;
        playerOneTotal.textContent = playerOneTotalNum;
        playerTwoTotalNum = 0;
        playerTwoTotal.textContent = playerTwoTotalNum;

        roller.removeAttribute('disabled');
        hold.removeAttribute('disabled');

        if (playerOne.classList.contains('player--winner')) {
            playerOne.classList.remove('player--winner');
        } else {
            playerTwo.classList.remove('player--winner');
        }
    }
    
});

hold.addEventListener('click', () => {
    if (playerOne.classList.contains('player--active')) {
        playerOneTotalNum += playerTempOneNumber;
        playerOneTotal.textContent = playerOneTotalNum;
        playerOne.classList.remove('player--active');
        playerTwo.classList.add('player--active');
        playerTempOneNumber = 0;
        playerTempOne.textContent = playerTempOneNumber;
    } else {
        playerTwoTotalNum += playerTempTwoNumber;
        playerTwoTotal.textContent = playerTwoTotalNum;
        playerTwo.classList.remove('player--active');
        playerOne.classList.add('player--active');
        playerTempTwoNumber = 0;
        playerTempTwo.textContent = playerTempTwoNumber;
    }
});

function winner(playerDetails) {
    playerDetails.classList.add('player--winner', 'name');
    roller.setAttribute('disabled', true);
    hold.setAttribute('disabled', true);
}

roller.addEventListener('click', () => {
    let random = Math.trunc(Math.random() * 6) + 1;

    if (playerOneTotalNum >= 100) {
        winner(playerOne);
    } else if (playerTwoTotalNum >= 100) {
        winner(playerTwo);
    }

    if (random === 1) {
        diceImage.src = './images/dice-1.png';
        if (playerOne.classList.contains('player--active')) {
            playerOne.classList.remove('player--active');
            playerTwo.classList.add('player--active');
            playerTempOneNumber = 0;
            playerTempOne.textContent = playerTempOneNumber;
        } else {
            playerTwo.classList.remove('player--active');
            playerOne.classList.add('player--active');
            playerTempTwoNumber = 0;
            playerTempTwo.textContent = playerTempTwoNumber;
        }
    } else if (random === 2) {
        diceImage.src = './images/dice-2.png';
        if (playerOne.classList.contains('player--active')) {
            playerTempOneNumber += random;
            playerTempOne.textContent = playerTempOneNumber;
        } else {
            playerTempTwoNumber += random;
            playerTempTwo.textContent = playerTempTwoNumber;
        }
    } else if (random === 3) {
        diceImage.src = './images/dice-3.png';
        if (playerOne.classList.contains('player--active')) {
        playerTempOneNumber += random;
        playerTempOne.textContent = playerTempOneNumber;
    } else {
        playerTempTwoNumber += random;
        playerTempTwo.textContent = playerTempTwoNumber;
    }
    } else if (random === 4) {
        diceImage.src = './images/dice-4.png';
        if (playerOne.classList.contains('player--active')) {
        playerTempOneNumber += random;
        playerTempOne.textContent = playerTempOneNumber;
    } else {
        playerTempTwoNumber += random;
        playerTempTwo.textContent = playerTempTwoNumber;
    }
    } else if (random === 5) {
        diceImage.src = './images/dice-5.png';
        if (playerOne.classList.contains('player--active')) {
        playerTempOneNumber += random;
        playerTempOne.textContent = playerTempOneNumber;
    } else {
        playerTempTwoNumber += random;
        playerTempTwo.textContent = playerTempTwoNumber;
    }
    } else {
        diceImage.src = './images/dice-6.png';
        if (playerOne.classList.contains('player--active')) {
        playerTempOneNumber += random;
        playerTempOne.textContent = playerTempOneNumber;
    } else {
        playerTempTwoNumber += random;
        playerTempTwo.textContent = playerTempTwoNumber;
    }
    }
});
