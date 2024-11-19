import { readFileSync } from 'node:fs';

const input = readFileSync('day01_2015.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split(''); // Split on newline
//.map(Number(item)) // convert string to number

function part1() {
  const plusFloor = input.filter(item => item === '(');
  const minusFloor = input.filter(item => item === ')');
  console.log(`Part 1 solution: ${plusFloor.length - minusFloor.length}`);
}

function part2() {
  let count = 0;
  let sum = 0;
  while (sum >= 0) {
    if (input[count] === '(') {
      count++;
      sum++;
    } else {
      count++;
      sum--;
    }
  }
  console.log(`Part 2 solution: ${count}`);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
