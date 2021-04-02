'use strict';

/*
Game logic
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = scoreArg => {
  document.querySelector('.score').textContent = scoreArg;
};

document.querySelector('.check').addEventListener('click', function () {
  const currentValue = Number(document.querySelector('.guess').value);

  //-> If input is empty or zero
  if (!currentValue) {
    displayMessage('🚫 No Number!');
  }
  //-> If guess is equal to the secret number
  else if (currentValue === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayMessage('🎉 Correct Guess!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //-> If guess is wrong
  //-> if input is too high
  else if (currentValue !== secretNumber) {
    if (score > 1) {
      displayMessage(
        currentValue > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      displayScore(score);
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayScore(20);
  displayMessage('Start guessing...🤔');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
