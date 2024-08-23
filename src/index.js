import { renderGameboard } from "./modules/renderBoard";
import { Player } from "./modules/player";
import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";
import { ComputerPlayer } from "./modules/computerPlayer";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const playerGameboard = new Gameboard();
  const computerGameboard = new Gameboard();

  const playerBoardElement = document.getElementById("player-board");
  const computerBoardElement = document.getElementById("computer-board");

  const computer = new ComputerPlayer("Computer", computerGameboard);

  function randomizeShipPlacements(gameboard) {
    gameboard.clearBoard();
    const ships = [
      new Ship("Carrier", 5),
      new Ship("Battleship One", 4),
      new Ship("Battleship Two", 4),
      new Ship("Destroyer One", 3),
      new Ship("Destroyer Two", 3),
      new Ship("Destroyer Three", 3),
      new Ship("Submarine One", 3),
      new Ship("Submarine Two", 3),
      new Ship("Submarine Three", 3),
      new Ship("Submarine Four", 3),
      new Ship("Patrol One", 2),
      new Ship("Patrol Two", 2),
      new Ship("Patrol Three", 2),
      new Ship("Patrol Four", 2),
      new Ship("Patrol Five", 2),
    ];

    ships.forEach((ship) => {
      let placed = false;
      while (!placed) {
        const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        placed = gameboard.placeShip(ship, [x, y], direction);
      }
    });
  }

  function handleComputerBoardClick(event) {
    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);

    if (!isNaN(x) && !isNaN(y)) {
      const key = `${x},${y}`;
      if (computerGameboard.attackedPositions.has(key)) {
        alert("You've already attacked this position! Try a different spot.");
        return;
      }
      // Player's turn to attack
      computerGameboard.receiveAttack([x, y]);
      renderGameboard(computerGameboard, computerBoardElement);

      if (computerGameboard.allShipsSunk()) {
        alert("You won! All computer ships are sunk!");
        return;
      }
      // Computer's turn to attack
      let validMove = false;
      while (!validMove) {
        const computerMove = computer.makeMove();
        const [cx, cy] = computerMove;
        const computerKey = `${cx},${cy}`;

        if (!playerGameboard.attackedPositions.has(computerKey)) {
          playerGameboard.receiveAttack(computerMove);
          validMove = true;
        }
      }
      renderGameboard(playerGameboard, playerBoardElement);

      if (playerGameboard.allShipsSunk()) {
        alert("Game over! The computer has sunk all your ships.");
      }
    }
  }

  function initializeGame() {
    randomizeShipPlacements(playerGameboard);
    randomizeShipPlacements(computerGameboard);
    renderGameboard(playerGameboard, playerBoardElement);
    renderGameboard(computerGameboard, computerBoardElement);
    computerBoardElement.removeEventListener("click", handleComputerBoardClick);
    computerBoardElement.addEventListener("click", handleComputerBoardClick);
  }

  document.getElementById("start-game").addEventListener("click", () => {
    initializeGame();
    alert("Game started! Attack the computer's board.");
  });

  document.getElementById("restart-game").addEventListener("click", () => {
    initializeGame();
    alert("Game restarted! Attack the computer's board.");
  });

  document.getElementById("randomize-ships").addEventListener("click", () => {
    randomizeShipPlacements(playerGameboard);
    renderGameboard(playerGameboard, playerBoardElement);
  });

  // Iniciar o jogo automaticamente ao carregar a página
  initializeGame();
});
