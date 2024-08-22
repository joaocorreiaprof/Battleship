import { renderGameboard } from "./modules/renderBoard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import { ComputerPlayer } from "./modules/computerPlayer";
import "./style.css";

const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

playerGameboard.placeShip(new Ship("Destroyer", 3), [0, 0], "horizontal");
computerGameboard.placeShip(new Ship("Submarine", 3), [0, 0], "horizontal");

const player = new Player("Player 1", playerGameboard);
const computer = new ComputerPlayer("Computer", computerGameboard);

const playerBoardElement = document.getElementById("player-board");
const computerBoardElement = document.getElementById("computer-board");

renderGameboard(playerGameboard, playerBoardElement);
renderGameboard(computerGameboard, computerBoardElement);

// Handle the click events for attacking the computer's board
computerBoardElement.addEventListener("click", (event) => {
  const x = parseInt(event.target.dataset.x);
  const y = parseInt(event.target.dataset.y);

  if (!isNaN(x) && !isNaN(y)) {
    computer.receiveAttack([x, y], computerGameboard);
    renderGameboard(computerGameboard, computerBoardElement);

    if (computerGameboard.allShipsSunk()) {
      alert("You won! All computer ships are sunk!");
      return;
    }

    const computerMove = computer.makeMove();
    player.receiveAttack(computerMove, playerGameboard);
    renderGameboard(playerGameboard, playerBoardElement);

    // Check if the computer has won
    if (playerGameboard.allShipsSunk()) {
      alert("Game over! The computer has sunk all your ships.");
    }
  }
});
