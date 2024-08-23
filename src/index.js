import { renderGameboard } from "./modules/renderBoard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import { ComputerPlayer } from "./modules/computerPlayer";
import "./style.css";

const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();
//Player board
playerGameboard.placeShip(new Ship("Carrier", 5), [0, 0], "horizontal");
playerGameboard.placeShip(new Ship("Battleship One", 4), [2, 2], "vertical");
playerGameboard.placeShip(new Ship("Battleship Two", 4), [2, 0], "vertical");
playerGameboard.placeShip(new Ship("Destroyer One", 3), [4, 4], "horizontal");
playerGameboard.placeShip(new Ship("Destroyer Two", 3), [9, 7], "horizontal");
playerGameboard.placeShip(new Ship("Destroyer Three", 3), [6, 4], "horizontal");
playerGameboard.placeShip(new Ship("Submarine One", 3), [6, 1], "vertical");
playerGameboard.placeShip(new Ship("Submarine Two", 3), [0, 6], "vertical");
playerGameboard.placeShip(new Ship("Submarine Three", 3), [6, 3], "vertical");
playerGameboard.placeShip(new Ship("Submarine Four", 3), [5, 7], "horizontal");
playerGameboard.placeShip(new Ship("Patrol One", 2), [8, 6], "horizontal");
playerGameboard.placeShip(new Ship("Patrol Two", 2), [6, 8], "horizontal");
playerGameboard.placeShip(new Ship("Patrol Three", 2), [0, 8], "vertical");
playerGameboard.placeShip(new Ship("Patrol Four", 2), [9, 3], "horizontal");
playerGameboard.placeShip(new Ship("Patrol Five", 2), [3, 8], "horizontal");
//Computer board
computerGameboard.placeShip(new Ship("Carrier", 5), [0, 0], "horizontal");
computerGameboard.placeShip(new Ship("Battleship One", 4), [2, 2], "vertical");
computerGameboard.placeShip(new Ship("Battleship Two", 4), [2, 0], "vertical");
computerGameboard.placeShip(new Ship("Destroyer One", 3), [4, 4], "horizontal");
computerGameboard.placeShip(new Ship("Destroyer Two", 3), [9, 7], "horizontal");
computerGameboard.placeShip(
  new Ship("Destroyer Three", 3),
  [6, 4],
  "horizontal"
);
computerGameboard.placeShip(new Ship("Submarine One", 3), [6, 1], "vertical");
computerGameboard.placeShip(new Ship("Submarine Two", 3), [0, 6], "vertical");
computerGameboard.placeShip(new Ship("Submarine Three", 3), [6, 3], "vertical");
computerGameboard.placeShip(
  new Ship("Submarine Four", 3),
  [5, 7],
  "horizontal"
);
computerGameboard.placeShip(new Ship("Patrol One", 2), [8, 6], "horizontal");
computerGameboard.placeShip(new Ship("Patrol Two", 2), [6, 8], "horizontal");
computerGameboard.placeShip(new Ship("Patrol Three", 2), [0, 8], "vertical");
computerGameboard.placeShip(new Ship("Patrol Four", 2), [9, 3], "horizontal");
computerGameboard.placeShip(new Ship("Patrol Five", 2), [3, 8], "horizontal");

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
  }
});
