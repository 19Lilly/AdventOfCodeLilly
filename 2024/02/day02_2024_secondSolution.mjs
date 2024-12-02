import { readFileSync } from 'node:fs';

const input = readFileSync('day02_2024.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n')
  .map(arr => arr.split(' '))
  .map(arr => arr.map(item => Number(item)));

// console.log(input);
const isSafe = array => {
  const differences = [];
  for (let i = 0; i < array.length - 1; i++) {
    differences.push(Math.abs(array[i] - array[i + 1]));
  }

  if (!differences.every(diff => diff >= 1 && diff <= 3)) {
    return false;
  }

  const isIncreasing = array.every(
    (level, i, arr) => i === 0 || arr[i - 1] < level
  );
  const isDecreasing = array.every(
    (level, i, arr) => i === 0 || arr[i - 1] > level
  );

  return isIncreasing || isDecreasing;
};

function part1() {
  const result = input.map(arr => isSafe(arr)).filter(item => item === true);
  console.log(result.length);
}

function part2() {
  //do something here
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
