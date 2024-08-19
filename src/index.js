// index.js
import { renderGameboard } from "./modules/renderBoard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import "./style.css";

// Create the gameboards for both players
const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

// Place ships for both players
playerGameboard.placeShip(new Ship("Destroyer", 3), [0, 0], "horizontal");
computerGameboard.placeShip(new Ship("Submarine", 3), [0, 0], "horizontal");

// Create player instances
const player = new Player("Player 1", playerGameboard);
const computer = new Player("Computer", computerGameboard, true);

// Get the DOM elements for both boards
const playerBoardElement = document.getElementById("player-board");
const computerBoardElement = document.getElementById("computer-board");

// Render the initial state of both gameboards
renderGameboard(playerGameboard, playerBoardElement);
renderGameboard(computerGameboard, computerBoardElement);

// Handle the click events for attacking the computer's board
computerBoardElement.addEventListener("click", (event) => {
  const x = parseInt(event.target.dataset.x);
  const y = parseInt(event.target.dataset.y);

  if (!isNaN(x) && !isNaN(y)) {
    player.attack([x, y], computerGameboard);
    renderGameboard(computerGameboard, computerBoardElement);

    // Computer's turn to attack
    computer.randomAttack(playerGameboard);
    renderGameboard(playerGameboard, playerBoardElement);

    // Check for game over conditions
    if (computerGameboard.allShipsSunk()) {
      alert("You won! All computer ships are sunk!");
    } else if (playerGameboard.allShipsSunk()) {
      alert("Game over! The computer has sunk all your ships.");
    }
  }
});
