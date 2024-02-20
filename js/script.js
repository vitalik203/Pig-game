"use strict";
let player1 = prompt("Як буде називатися перший ігрок? -: ");
let player2 = prompt("Як буде називатися другий ігрок? -: ");
document.querySelector(".header_col1-name").innerHTML = player1;
document.querySelector(".header_col2-name").innerHTML = player2;
let curentPlayer = 1;

//player One
let score1 = document.querySelector(".header_col1-score");
let score2 = document.querySelector(".header_col2-score");

//player Two
let curentScore1 = document.querySelector(".header_col1_curent-score");
let curentScore2 = document.querySelector(".header_col2_curent-score");
let curentScore2Change = 0,
  curentScore1Change = 0,
  finallyScore1 = 0,
  finallyScore2 = 0;

const againBtn = document.querySelector(".again");
const diceBtn = document.querySelector(".dice");
const holdBtn = document.querySelector(".hold");

let gameEnded = false;

let generatedNum;

function generateNum() {
  return Math.trunc(Math.random() * 6) + 1;
}

function switchPlayer() {
  if (curentPlayer === 1) {
    curentPlayer = 2;
  } else {
    curentPlayer = 1;
  }
}

diceBtn.addEventListener("click", function () {
  generatedNum = generateNum();
  document.querySelector(
    ".generatedDice"
  ).innerHTML = `<img src="img/dice-${generatedNum}.png" alt="dice">`;
  console.log(generatedNum);
  if (generatedNum !== 1) {
    curentPlayer === 1
      ? (curentScore1Change += generatedNum)
      : (curentScore2Change += generatedNum);
    curentPlayer === 1
      ? (curentScore1.innerHTML = `${curentScore1Change}`)
      : (curentScore2.innerHTML = `${curentScore2Change}`);
  } else {
    curentPlayer === 1
      ? (document.querySelector(".header_col1_curent-score").innerText = 0)
      : (document.querySelector(".header_col2_curent-score").innerText = 0);
    switchPlayer();
    curentPlayer === 1 ? (curentScore1Change = 0) : (curentScore2Change = 0);
    curentPlayer === 1
      ? (curentScore1Change += generatedNum)
      : (curentScore2Change += generatedNum);
    curentPlayer === 1
      ? (curentScore1.innerHTML = `${curentScore1Change}`)
      : (curentScore2.innerHTML = `${curentScore2Change}`);
  }
  curentPlayer === 1
    ? (document.querySelector(
        ".img__pick"
      ).innerHTML = `<img src="img/arrow-left.png" alt="direction">`)
    : (document.querySelector(
        ".img__pick"
      ).innerHTML = `<img src="img/arrow-right.png" alt="direction">`);
  if (Number(finallyScore1) >= 100) {
    gameEnded = true;
    document.querySelector(
      ".win_player1"
    ).textContent = `${player1} виграв цю гру!!!`;
  } else if (Number(finallyScore2) >= 100) {
    gameEnded = true;
    document.querySelector(
      ".win_player2"
    ).textContent = `${player2} виграв цю гру!!!`;
  }
});

holdBtn.addEventListener("click", function () {
  curentPlayer === 1
    ? (finallyScore1 += curentScore1Change)
    : (finallyScore2 += curentScore2Change);
  score1.innerText = finallyScore1;
  score2.innerText = finallyScore2;
  curentPlayer === 1 ? (curentScore1Change = 0) : (curentScore2Change = 0);
  curentPlayer === 1
    ? (document.querySelector(
        ".img__pick"
      ).innerHTML = `<img src="img/arrow-left.png" alt="direction">`)
    : (document.querySelector(
        ".img__pick"
      ).innerHTML = `<img src="img/arrow-right.png" alt="direction">`);
  switchPlayer();
  curentPlayer === 1
    ? (document.querySelector(
        ".img__pick"
      ).innerHTML = `<img src="img/arrow-left.png" alt="direction">`)
    : (document.querySelector(
        ".img__pick"
      ).innerHTML = `<img src="img/arrow-right.png" alt="direction">`);
  if (Number(finallyScore1) >= 100) {
    document.querySelector(
      ".win_player1"
    ).textContent = `${player1} виграв цю гру!!!`;
    holdBtn.classList.add("disabled");
    diceBtn.classList.add("disabled");
  } else if (Number(finallyScore2) >= 100) {
    document.querySelector(
      ".win_player2"
    ).textContent = `${player2} виграв цю гру!!!`;
    holdBtn.classList.add("disabled");
    diceBtn.classList.add("disabled");
  } else {
    holdBtn.classList.remove("disabled");
    diceBtn.classList.remove("disabled");
  }
});

againBtn.addEventListener("click", function () {
  holdBtn.classList.remove("disabled");
  diceBtn.classList.remove("disabled");
  document.querySelector(".win_player1").innerHTML = "";
  document.querySelector(".win_player2").innerHTML = "";
  finallyScore1 = 0;
  finallyScore2 = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  curentScore1.textContent = 0;
  curentScore2.textContent = 0;
  curentScore1Change.textContent = 0;
  curentScore2Change.textContent = 0;
  curentPlayer = 1;
});
