
let cells = document.getElementsByClassName("cell");

let board = new Array(9);

var playerX = "Player 1";
var playerO = "Player 2";
var xScore = 0;
var oScore = 0;

let charX = false;
let gameOver = false;

// Enter player names
const enterName = () => {
  let nameX = prompt('Please enter name for player 1 (X\'s)');
  playerX = nameX;
  document.getElementById("playerX").innerText = 'X - ' + playerX + ':';
  let nameO = prompt('Please enter name for player 2 (O\'s)');
  playerO = nameO;
  document.getElementById("playerO").innerText = 'O - ' + playerO + ':';
}

enterName();

// Flip between X's and O's
const chooseChar = () => {
  if (!charX) {
    charX = true;
    return "X";
  } else {
    charX = false;
    return "O";
  }
}

const makeMove = (event) => {
  if (event.target.innerText === "") {
    letter = chooseChar();
    event.target.innerText = letter;
    board[event.target.id] = letter;
    searchForWin();

  }
}

// Add event listeners to each cell
if (!gameOver) {
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(i);
    cell.addEventListener("click", (event) => makeMove(event));
  }
}

// Tic Tac Toe rules
const searchForWin = () => {
  // Horizontal wins
  if ((board[0] + board[1] + board[2] === 'XXX') || (board[0] + board[1] + board[2] === 'OOO')) {
    endGame();
    if (board[0] = 'X') {
      document.getElementById("xScore").innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  } else if ((board[3] + board[4] + board[5] === 'XXX') || (board[3] + board[4] + board[5] === 'OOO')) {
    endGame();
    if (board[0] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  } else if ((board[6] + board[7] + board[8] === 'XXX') || (board[6] + board[7] + board[8] === 'OOO')) {
    endGame();
    if (board[0] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  }
  // Vertcal wins
  else if ((board[0] + board[3] + board[6] === 'XXX') || (board[0] + board[3] + board[6] === 'OOO')) {
    endGame();
    if (board[0] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  } else if ((board[1] + board[4] + board[7] === 'XXX') || (board[1] + board[4] + board[7] === 'OOO')) {
    endGame();
    if (board[1] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  } else if ((board[2] + board[5] + board[8] === 'XXX') || (board[2] + board[5] + board[8] === 'OOO')) {
    endGame();
    if (board[2] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  }
  // Diagonal wins
  if ((board[0] + board[4] + board[8] === 'XXX') || (board[0] + board[4] + board[8] === 'OOO')) {
    endGame();
    if (board[0] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText.innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  } else if ((board[2] + board[4] + board[6] === 'XXX') || (board[2] + board[4] + board[6] === 'OOO')) {
    endGame();
    if (board[2] = 'X') {
      document.getElementById("xScore").innerText.innerText = Number(document.getElementById("xScore").innerText .innerText)++;
      alert(playerX + ' is the winner!');
    } else {
      oScore.innerText = Number(oScore.innerText)++;
      alert(playerO + ' is the winner!');
    }
  }
}

// FIXME: Prohibit further moves if game is over
const endGame = () => {
  console.log('The game is over!');
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(i);
    cell.removeEventListener("click", (event) => makeMove(event));
  }
  gameOver = true;
}


// Restart button
let button = document.getElementsByClassName("restart");
button[0].addEventListener("click", () => {
  let board = new Array(9);
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(i);
    cell.innerText = '';
  }
})

