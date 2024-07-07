'use strict';

const reset = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const allButtons = document.querySelectorAll('.btn')

// players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceImage = document.querySelector('.dice');

// scroe access
let tempScore0 = document.querySelector('#current--0');
let tempScore1 = document.querySelector('#current--1');
let player0Total = document.querySelector('#score--0');
let player1Total = document.querySelector('#score--1');

let tempScoreNumber0 = Number(tempScore0.textContent);
let tempScoreNumber1 = Number(tempScore1.textContent);
let activeClass = true;
roll.addEventListener('click', () => {
    let random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);
    if (random === 1) {
        diceImage.src = './images/dice-1.png';
        if (player0.classList.contains('player--active')) {
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
            tempScore0.textContent = 0;
        } else {
            player0.classList.add('player--active');
            player1.classList.remove('player--active');
            tempScore1.textContent = 0;
        }
    } else if (random === 2) {
        diceImage.src = './images/dice-2.png';
        if (player0.classList.contains('player--active')) {
            tempScoreNumber0 += random;
            tempScore0.textContent = tempScoreNumber0;
            hold.addEventListener('click', () => {
                player0Total.textContent =
                    Number(player0Total.textContent) + tempScoreNumber0;
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                tempScoreNumber0 = 0;
                tempScore0.textContent = tempScoreNumber0;
            });
        } else if (player1.classList.contains('player--active')) {
            tempScoreNumber1 += random;
            tempScore1.textContent = tempScoreNumber1;
            hold.addEventListener('click', () => {
                player1Total.textContent =
                    Number(player1Total.textContent) + tempScoreNumber1;
                player0.classList.add('player--active');
                player1.classList.remove('player--active');
                tempScoreNumber1 = 0;
                tempScore1.textContent = tempScoreNumber1;
            });
        }
    } else if (random === 3) {
        diceImage.src = './images/dice-3.png';
        if (player0.classList.contains('player--active')) {
            tempScoreNumber0 += random;
            tempScore0.textContent = tempScoreNumber0;
            hold.addEventListener('click', () => {
                player0Total.textContent =
                    Number(player0Total.textContent) + tempScoreNumber0;
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                tempScoreNumber0 = 0;
                tempScore0.textContent = tempScoreNumber0;
            });
        } else if (player1.classList.contains('player--active')) {
            tempScoreNumber1 += random;
            tempScore1.textContent = tempScoreNumber1;
            hold.addEventListener('click', () => {
                player1Total.textContent =
                    Number(player1Total.textContent) + tempScoreNumber1;
                player0.classList.add('player--active');
                player1.classList.remove('player--active');
                tempScoreNumber1 = 0;
                tempScore1.textContent = tempScoreNumber1;
            });
        }
    } else if (random === 4) {
        diceImage.src = './images/dice-4.png';
        if (player0.classList.contains('player--active')) {
            tempScoreNumber0 += random;
            tempScore0.textContent = tempScoreNumber0;
            hold.addEventListener('click', () => {
                player0Total.textContent =
                    Number(player0Total.textContent) + tempScoreNumber0;
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                tempScoreNumber0 = 0;
                tempScore0.textContent = tempScoreNumber0;
            });
        } else if (player1.classList.contains('player--active')) {
            tempScoreNumber1 += random;
            tempScore1.textContent = tempScoreNumber1;
            hold.addEventListener('click', () => {
                player1Total.textContent =
                    Number(player1Total.textContent) + tempScoreNumber1;
                player0.classList.add('player--active');
                player1.classList.remove('player--active');
                tempScoreNumber1 = 0;
                tempScore1.textContent = tempScoreNumber1;
            });
        }
    } else if (random === 5) {
        diceImage.src = './images/dice-5.png';
        if (player0.classList.contains('player--active')) {
            tempScoreNumber0 += random;
            tempScore0.textContent = tempScoreNumber0;
            hold.addEventListener('click', () => {
                player0Total.textContent =
                    Number(player0Total.textContent) + tempScoreNumber0;
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                tempScoreNumber0 = 0;
                tempScore0.textContent = tempScoreNumber0;
            });
        } else if (player1.classList.contains('player--active')) {
            tempScoreNumber1 += random;
            tempScore1.textContent = tempScoreNumber1;
            hold.addEventListener('click', () => {
                player1Total.textContent =
                    Number(player1Total.textContent) + tempScoreNumber1;
                player0.classList.add('player--active');
                player1.classList.remove('player--active');
                tempScoreNumber1 = 0;
                tempScore1.textContent = tempScoreNumber1;
            });
        }
    } else {
        diceImage.src = './images/dice-6.png';
        if (player0.classList.contains('player--active')) {
            tempScoreNumber0 += random;
            tempScore0.textContent = tempScoreNumber0;
            hold.addEventListener('click', () => {
                player0Total.textContent =
                    Number(player0Total.textContent) + tempScoreNumber0;
                player0.classList.remove('player--active');
                player1.classList.add('player--active');
                tempScoreNumber0 = 0;
                tempScore0.textContent = tempScoreNumber0;
            });
        } else if (player1.classList.contains('player--active')) {
            tempScoreNumber1 += random;
            tempScore1.textContent = tempScoreNumber1;
            hold.addEventListener('click', () => {
                player1Total.textContent =
                    Number(player1Total.textContent) + tempScoreNumber1;
                player0.classList.add('player--active');
                player1.classList.remove('player--active');
                tempScoreNumber1 = 0;
                tempScore1.textContent = tempScoreNumber1;
            });
        }
    }

    if (Number(player0Total.textContent) >= 100) {
        player0.classList.add('player--winner');

        allButtons.forEach((button) => {
            if (!allButtons.classList?.contains('btn--new')) {
                button.setAttribute('disabled', 'true');
            }
        })
            
    } else if (Number(player1Total.textContent) >= 100) {
        player1.classList.add('player--winner');
        allButtons.forEach((button) => {
            if (!allButtons.classList?.contains('btn--new')) {
                button.setAttribute('disabled', 'true');
            }
        });
    }
});

reset.addEventListener('click', () => {
    player0Total.textContent = 0;
    player1Total.textContent = 0;
    tempScore0.textContent = 0;
    tempScore1.textContent = 0;
    tempScoreNumber0 = 0;
    tempScoreNumber1 = 0;
    diceImage.src = './images/dice-1.png';
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    allButtons.forEach((button) => button.removeAttribute('disabled'));
});
