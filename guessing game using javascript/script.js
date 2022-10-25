'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎈🎈🎈 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;



// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let secretnumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highscore = 0;

// // document.querySelector('.number').textContent = secretnumber;

// document.querySelector('.check').addEventListener('click', function () {

//     const guess = Number(document.querySelector('.guess').value);


//     if (!guess) {
//         document.querySelector('.message').textContent = ' ❌ No Number Input';

//     }
//     else if (guess === secretnumber) {
//         document.querySelector('.message').textContent = '🎈🎈🎈 Correct Number!';
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';
//         document.querySelector('.number').textContent = secretnumber;

//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }

//     }
//     else if (guess > secretnumber) {
//         document.querySelector('.message').textContent = '  ↗ To High!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }

//     else if (guess < secretnumber) {
//         document.querySelector('.message').textContent = '   ↙ To Low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }


//     else if (guess !== secretnumber) {
//         if (score > 1) {
//             displayMessage(guess > secretnumber ? '📈 Too high!' : '📉 Too low!');
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             // document.querySelector('.message').textContent = '💥 You lost the game!';
//             displayMessage('💥 You lost the game!');
//             document.querySelector('.score').textContent = 0;
//         }
//     }



// })



// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretnumber = Math.trunc(Math.random() * 20) + 1;

//     // document.querySelector('.message').textContent = 'Start guessing...';
//     displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });





const testScore = {
    a: 10,
    b: 32,
    c: 34,
    d: 35,
    e: 37,
    f: 38,
    g: 56

};

let total = 0;
let scores = Object.values(testScore);
for (let score of scores) {
    total += score;
}

console.log(`total sum of object value ${total}`);
console.log(total / scores.length);


