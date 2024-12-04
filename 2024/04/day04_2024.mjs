import { readFileSync } from 'node:fs';

const input = readFileSync('day04_2024.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n') // Split on newline
  .map(str => str.split(''));

console.log(input);

function part1() {
  function findWordInGrid(grid, word) {
    const rows = grid.length;
    const cols = grid[0].length;
    const wordLength = word.length;
    let count = 0;

    // Define directions: [row_offset, col_offset]
    const directions = [
      [0, 1], // Right
      [1, 0], // Down
      [0, -1], // Left
      [-1, 0], // Up
      [1, 1], // Down-right diagonal
      [1, -1], // Down-left diagonal
      [-1, 1], // Up-right diagonal
      [-1, -1], // Up-left diagonal
    ];

    // Function to check if the word exists starting from (row, col) in a specific direction
    function isWordAt(row, col, dir) {
      for (let i = 0; i < wordLength; i++) {
        const newRow = row + i * dir[0];
        const newCol = col + i * dir[1];
        if (
          newRow < 0 ||
          newRow >= rows || // Check row bounds
          newCol < 0 ||
          newCol >= cols || // Check col bounds
          grid[newRow][newCol] !== word[i] // Check character match
        ) {
          return false;
        }
      }
      return true;
    }

    // Traverse each cell in the grid
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Check all directions from this cell
        for (const dir of directions) {
          if (isWordAt(row, col, dir)) {
            count++;
          }
        }
      }
    }

    return count;
  }

  console.log(findWordInGrid(input, 'XMAS')); // Output: Number of occurrences
}

function part2(data) {
  const rows = data.length;
  const cols = data[0].length;
  let count = 0;

  const checkXMAS = (x, y) => {
    if (data[x][y] != 'A') return false;
    if (x - 1 < 0 || x + 1 >= rows || y - 1 < 0 || y + 1 >= cols) {
      return false;
    }

    const topLeftToBottomRight =
      (data[x - 1][y - 1] === 'M' && data[x + 1][y + 1] === 'S') ||
      (data[x - 1][y - 1] === 'S' && data[x + 1][y + 1] === 'M');

    const topRightToBottomLeft =
      (data[x - 1][y + 1] === 'M' && data[x + 1][y - 1] === 'S') ||
      (data[x - 1][y + 1] === 'S' && data[x + 1][y - 1] === 'M');

    return topLeftToBottomRight && topRightToBottomLeft;
  };
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (checkXMAS(x, y)) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

part1();
part2(input);

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
