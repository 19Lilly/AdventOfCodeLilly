import { readFileSync } from "node:fs";

const input = readFileSync("day03_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline
const grid = input.map((line) => line.split(""));

console.log(grid);

function part1() {
  let sum = 0;

  for (let y = 0; y < grid.length; y++) {
    let currentNumber = "",
      checkNumber = false,
      nearSymbol = false;

    for (let x = 0; x < grid[y].length; x++) {
      // if current spot is a number and we aren't checking them yet, start checking
      if (grid[y][x].match(/[0-9]/) && !checkNumber) {
        checkNumber = true;
        currentNumber = "";
        nearSymbol = false;
      }

      // if we find a non-number or at end of the row, stop checking and add to sum if needed
      if (
        (x == grid[y].length - 1 || !grid[y][x].match(/[0-9]/)) &&
        checkNumber
      ) {
        if (nearSymbol)
          sum += parseInt(
            currentNumber + (grid[y][x].match(/[0-9]/) ? grid[y][x] : "")
          );
        checkNumber = false;
      }

      // if we are checking for numbers, add current spot to number and check for symbols around it
      if (checkNumber) {
        currentNumber += grid[y][x];

        // check for symbol around current spot
        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (i == 0 && j == 0) continue;
            if (
              y + j < 0 ||
              y + j >= grid.length ||
              x + i < 0 ||
              x + i >= grid[y].length
            )
              continue;

            // anything that is not a number or . is a symbol
            if (!grid[y + j][x + i].match(/[0-9.]/)) nearSymbol = true;
          }
        }
      }
    }
  }

  return sum;
}

function part2() {
  let gearNumbers = {};

  for (let y = 0; y < grid.length; y++) {
    let currentNumber = "",
      checkNumber = false,
      gearLocation = null;

    for (let x = 0; x < grid[y].length; x++) {
      // if current spot is a number and we aren't checking them yet, start checking
      if (grid[y][x].match(/[0-9]/) && !checkNumber) {
        checkNumber = true;
        currentNumber = "";
        gearLocation = null;
      }

      // if we find a non-number or at end of the row, stop checking and add to sum if needed
      if (
        (x == grid[y].length - 1 || !grid[y][x].match(/[0-9]/)) &&
        checkNumber
      ) {
        if (gearLocation)
          gearNumbers[gearLocation].push(
            parseInt(
              currentNumber + (grid[y][x].match(/[0-9]/) ? grid[y][x] : "")
            )
          );
        checkNumber = false;
      }

      // if we are checking for numbers, add current spot to number and check for '*' around it
      if (checkNumber) {
        currentNumber += grid[y][x];

        // check for star
        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (i == 0 && j == 0) continue;
            if (
              y + j < 0 ||
              y + j >= grid.length ||
              x + i < 0 ||
              x + i >= grid[y].length
            )
              continue;

            const char = grid[y + j][x + i];
            if (char == "*") {
              gearLocation = `${x + i},${y + j}`;
              if (gearNumbers[gearLocation] == null)
                gearNumbers[gearLocation] = [];
            }
          }
        }
      }
    }
  }

  // add all gear numbers multiplied

  return Object.values(gearNumbers).reduce((sum, array) => {
    if (array.length == 2) sum += array[0] * array[1];
    return sum;
  }, 0);
}

console.log(part1());
console.log(part2());
