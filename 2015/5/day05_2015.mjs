import { readFileSync } from 'node:fs';

const input = readFileSync('day05_2015.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n'); // Split on newline
//.map(Number(item)) // convert string to number
// console.log(input);
function part1() {
  const findNiceStrings = array => {
    const firstCondition = /ab|cd|pq|xy/;
    const secondCondition = /(.*[aeiou].*){3,}/i;
    const thirdCondition = /([a-zA-Z])\1/;
    return array
      .filter(item => !firstCondition.test(item))
      .filter(item => secondCondition.test(item))
      .filter(item => thirdCondition.test(item));
  };
  console.log(findNiceStrings(input).length);
}

function part2() {
  const findNiceStrings = array => {
    const firstCondition = /(..).*?\1/;
    const secondCondition = /([a-zA-Z]).\1/;
    return array
      .filter(item => firstCondition.test(item))
      .filter(item => secondCondition.test(item));
  };
  console.log(findNiceStrings(input).length);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
