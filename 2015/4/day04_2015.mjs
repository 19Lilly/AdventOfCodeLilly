import { readFileSync } from 'node:fs';

const input = readFileSync('day04_2015.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n'); // Split on newline
//.map(Number(item)) // convert string to number
console.log(input);

import { createHash } from 'crypto';
function part1() {
  function findAdventCoin(secretKey) {
    let number = 1;

    while (true) {
      const input = secretKey + number;

      // Generate the MD5 hash
      const hash = createHash('md5').update(input).digest('hex');

      // Check if the hash starts with "00000"
      if (hash.startsWith('00000')) {
        console.log(`Hash: ${hash}`); // Optional: Log the hash
        return number; // Return the smallest number
      }

      number++;
    }
  }

  const secretKey = input[0];
  const result = findAdventCoin(secretKey);
  console.log(`The lowest positive number is: ${result}`);
}

function part2() {
  function findAdventCoin(secretKey) {
    let number = 1;

    while (true) {
      const input = secretKey + number;

      // Generate the MD5 hash
      const hash = createHash('md5').update(input).digest('hex');

      // Check if the hash starts with "00000"
      if (hash.startsWith('000000')) {
        console.log(`Hash: ${hash}`); // Optional: Log the hash
        return number; // Return the smallest number
      }

      number++;
    }
  }

  const secretKey = input[0];
  const result = findAdventCoin(secretKey);
  console.log(`The lowest positive number is: ${result}`);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
