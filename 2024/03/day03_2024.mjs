import { readFileSync } from 'node:fs';

const input = readFileSync('day03_2024.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim(); // Remove starting/ending whitespace

// console.log(input);

function part1() {
  const reg = /\bmul\((\d+),(\d+)\)/g;
  const arr = input.match(reg);
  const reg1 = /\d{1,3},\d{1,3}/g;
  const arr1 = arr
    .map(item => item.match(reg1))
    .map(arr => arr[0].split(','))
    .map(arr => {
      return arr[0] * arr[1];
    });
  const result = arr1.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(result);
}

function part2() {
  const reg = /(?:mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))/g;
  const instructions = input.match(reg) || [];
  let isEnabled = true;
  let sum = 0;

  for (const instr of instructions) {
    if (instr === 'do()') {
      isEnabled = true;
    } else if (instr === "don't()") {
      isEnabled = false;
    } else if (isEnabled) {
      const [x, y] = instr.match(/\d+/g).map(Number);
      sum += x * y;
    }
  }

  console.log(sum);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
