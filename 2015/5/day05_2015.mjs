import { readFileSync } from 'node:fs';

const input = readFileSync('day05_2015_testData.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n'); // Split on newline
//.map(Number(item)) // convert string to number
console.log(input);
function part1() {
  const findNiceStrings = array => {
    {
      {
        {
        }
      }
    }
  };
}

function part2() {
  //do something here
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
