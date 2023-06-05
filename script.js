'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number !`

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = `No number`;
    // When the number is not between 1 and 20
  } else if (guess > 20) {
    document.querySelector('.message').textContent = `Between 1 and 20`;
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number !`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? `To high` : `To low`;
      score--;
      document.querySelector('.score').textContent = score;
      // When player losses
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Are you stupid or what?`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(160, 0, 0)';
    }
  }
  // When the number is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `To high`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     // When player losses
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `Are you stupid or what?`;
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'rgb(160, 0, 0)';
  //   }
  //   // When the number is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `To low`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     // When player losses
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `Are you stupid or what?`;
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'rgb(160, 0, 0)';
  //   }
  // }
});
