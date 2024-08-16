import { Ship } from "../modules/ship";

describe("Ship functions", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship("Battleship", 8);
  });

  test("checks if ship is sunk", () => {
    for (let i = 0; i < 8; i++) {
      ship.hit();
    }

    expect(ship.isSunk()).toBe(true);
  });

  test("checks if ship is not sunk", () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
