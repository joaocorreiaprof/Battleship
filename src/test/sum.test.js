import { sumOfNumbers } from "../modules/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sumOfNumbers(1, 2)).toBe(3);
});
