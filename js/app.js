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

// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//       this.sound.play();
//     }
//     this.stop = function(){
//       this.sound.pause();
//     }
//   }

// var audio = new Audio('audio/tower_clock.ogg');
// audio.play();

// var audio = new Audio('Black light.m4a');
// audio.addEventListener('click');

// alert('This page is under construction! Sorry for the innconvenience...');

debugger;

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

class Battleship {
    constructor() {
        this.win = false;
        this.turn = false;
        this.player1 = 0;
        this.player2 = 0;
        this.createGame();
    }
}

function createGame() {
    this.style.background ='pink';
    
}

// function resetGame() {
//     document.getElementById('reset');
//     {
//         window.location.reload(false);
//     }
// }

// resetGame();

// function resetGame() {
//     window.location.reload(false)
// }

// function redo() {
//     document.getElementById('reset');

// }



// function checkTile() {
//     let tile = this.getAttribute('data-idx');
// }

// checkTile();