import { Ship } from "../modules/ship";
import { Gameboard } from "../modules/gameboard";

describe("Gameboard", () => {
  let gameboard;
  let ship1;
  let ship2;

  beforeEach(() => {
    gameboard = new Gameboard();
    ship1 = new Ship("Destroyer", 3);
    ship2 = new Ship("Submarine", 2);
  });

  test("should place a ship horizontally on the gameboard", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");

    expect(gameboard.grid[0][0]).toBe(ship1);
    expect(gameboard.grid[0][1]).toBe(ship1);
    expect(gameboard.grid[0][2]).toBe(ship1);
  });

  test("should place a ship vertically on the gameboard", () => {
    gameboard.placeShip(ship1, [0, 0], "vertical");

    expect(gameboard.grid[0][0]).toBe(ship1);
    expect(gameboard.grid[1][0]).toBe(ship1);
    expect(gameboard.grid[2][0]).toBe(ship1);
  });

  test("should record a hit on a ship", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);

    expect(ship1.hits).toBe(1);
  });

  test("should sink a ship when all positions are hit", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);

    expect(ship1.isSunk()).toBe(true);
  });

  test("should record missed shots", () => {
    gameboard.receiveAttack([5, 5]);

    expect(gameboard.missedShots).toContainEqual([5, 5]);
  });

  test("should not increase hits for repeated attacks on the same position", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 0]);

    expect(ship1.hits).toBe(1);
  });

  test("should not mark a ship as sunk if it is only partially hit", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);

    expect(ship1.isSunk()).toBe(false);
  });

  test("should report true when all ships are sunk", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [1, 1], "vertical");

    // Sink ship1
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);

    // Sink ship2
    gameboard.receiveAttack([1, 1]);
    gameboard.receiveAttack([2, 1]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("should report false when not all ships are sunk", () => {
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [1, 1], "vertical");

    // Partially sink ship1
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);

    // Partially sink ship2
    gameboard.receiveAttack([1, 1]);

    expect(gameboard.allShipsSunk()).toBe(false);
  });
});
