'use strict';

var gTableSize = 16;
var gNums;
var gNextNum = 1;
var intervalId = null;
var gFirstClick = true;

function init() {
  initNums();
  renderBoard();
  gNextNum = 1;
  document.querySelector('.won').style.display = 'none';
  gFirstClick = true;
}

function renderBoard() {
  var strHTML = '';
  for (var i = 0; i < Math.sqrt(gTableSize); i++) {
    strHTML += '<tr>';
    for (var j = 0; j < Math.sqrt(gTableSize); j++) {
      strHTML += `<td onclick="cellClicked(this)"> ${drawNum()} </td>`;
    }
    strHTML += '</tr>';
  }
  var board = document.querySelector('.board');
  board.innerHTML = strHTML;
}

function cellClicked(elCell) {
  if (+elCell.innerText === gNextNum) {
    if (gNextNum === 1) {
      startTimer();
    }
    gNextNum++;
    document.querySelector('span').innerText = gNextNum;
    hideNumber(elCell);
    checkVictory();
  }
}

function checkVictory() {
  console.log(gNextNum);
  if (gNextNum === gTableSize + 1) {
    document.querySelector('.won').style.display = 'block';
    document.querySelector('.restart').innerText = 'Play Again?';
    clearInterval(intervalId);
    alert('You did it!');
  }
}

function easyGame() {
  gTableSize = 4;
  init();
}
function mediumGame() {
  gTableSize = 16;
  init();
}
function hardGame() {
  gTableSize = 25;
  init();
}

function drawNum() {
  return gNums.pop();
}

function initNums() {
  gNums = [];
  for (var i = 1; i <= gTableSize; i++) {
    gNums.push(i);
  }
  shuffle(gNums);
  
}

function startTimer() {
  var timerStart = Date.now();
  intervalId = setInterval(() => {
    document.querySelector('.timer').innerHTML =
      (Date.now() - timerStart) / 1000;
  }, 1);
}
