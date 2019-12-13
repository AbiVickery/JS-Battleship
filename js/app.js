// You should add the tiles of gameboard to the dom
// The AI must select a random tile on the gameboard
// You will select tiles and the game will indicate a HIT or a miss
// On HIT the game is over
// Add a button to start a new game

// Add x amount of tiles to gameboard
// Add event listener to each tile

// listener
// check if this is AI block
// if it is you win and end game
// else you missed
// keep going

// button listener
// reset gameboard and have AI choose new tile


let win = false;
let boardSize = 9;
let hit = Math.floor(Math.random() * Math.floor(boardSize));

const gameboard = document.getElementById('gameboard');
for (let i = 0; i < boardSize; i++) {
    let el = document.createElement('div');
    el.classList.add('box');
    el.setAttribute('data-id', i);
    gameboard.appendChild(el);
    el.addEventListener('click', createGame);
}



function createGame() {
    this.style.background ='pink';
    
}



// function checkTile() {
//     let tile = this.getAttribute('data-idx');
// }

// checkTile();