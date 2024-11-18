import { readFileSync } from 'node:fs';

const input = readFileSync('day03_2015.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split(''); // Split on newline
//.map(Number(item)) // convert string to number

console.log(input);

function part1() {
  //do something here
  let startPoint = [0, 0];
  const arr1 = input.map(item => {
    switch (item) {
      case '<':
        startPoint = [startPoint[0] - 1, startPoint[1]];
        break;
      case '>':
        startPoint = [startPoint[0] + 1, startPoint[1]];
        break;
      case '^':
        startPoint = [startPoint[0], startPoint[1] - 1];
        break;
      case 'v':
        startPoint = [startPoint[0], startPoint[1] + 1];
        break;
    }
    return startPoint;
  });
  const uniqueItems = Array.from(
    new Set(arr1.map(item => JSON.stringify(item)))
  ).map(item => JSON.parse(item));

  console.log(uniqueItems.length);
}

function part2() {
  //do something here
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
