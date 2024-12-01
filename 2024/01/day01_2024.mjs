import { readFileSync } from 'node:fs';

const input = readFileSync('day01_2024.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove tarting/ending whitespace
  .split(/\n/) // Split on newline
  // .map(item => item.match(/\d{1}/g));
  .map(item => item.match(/\d{5}/g));

// console.log(input);

const arr1 = input.map(arr => arr[0]).sort((a, b) => a - b);
const arr2 = input.map(arr => arr[1]).sort((a, b) => a - b);

function part1() {
  const findDistance = (arr1, arr2) => {
    const distances = arr1.map((item, index) =>
      item > arr2[index] ? item - arr2[index] : arr2[index] - item
    );
    const totalDistance = distances.reduce((acc, item) => acc + item, 0);
    // console.log(distances);
    // console.log(totalDistance);
  };

  findDistance(arr1, arr2);
}

function part2() {
  const similarity = arr1.map(item => {
    return arr2.filter(item1 => item1 === item);
  });
  const sum = similarity
    .map(arr => {
      if (arr.length === 0) return 0;
      if (arr.length > 0) {
        return arr[0] * arr.length;
      }
    })
    .reduce((acc, curr) => acc + curr, 0);

  console.log(sum);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
