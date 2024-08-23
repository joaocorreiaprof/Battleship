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

computerBoardElement.addEventListener("click", (event) => {
  const x = parseInt(event.target.dataset.x);
  const y = parseInt(event.target.dataset.y);

  if (!isNaN(x) && !isNaN(y)) {
    const key = `${x},${y}`;
    if (computerGameboard.attackedPositions.has(key)) {
      alert("You've already attacked this position! Try a different spot.");
      return;
    }
    // Player turn to attack
    computer.receiveAttack([x, y], computerGameboard);
    renderGameboard(computerGameboard, computerBoardElement);

    if (computerGameboard.allShipsSunk()) {
      alert("You won! All computer ships are sunk!");
      return;
    }
    //Computer turn to attack
    setTimeout(() => {
      let validMove = false;
      while (!validMove) {
        const computerMove = computer.makeMove();
        const [cx, cy] = computerMove;
        const computerKey = `${cx},${cy}`;

        if (!playerGameboard.attackedPositions.has(computerKey)) {
          player.receiveAttack(computerMove, playerGameboard);
          validMove = true;
        }
      }
      renderGameboard(playerGameboard, playerBoardElement);

      if (playerGameboard.allShipsSunk()) {
        alert("Game over! The computer has sunk all your ships.");
      }
    }, 500);
  }
});
