import { readFileSync } from 'node:fs';

const input = readFileSync('day02_2015.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n'); // Split on newline
//.map(Number(item)) // convert string to number

// console.log(input);

// const str = '2x3x4';
// // const str = '1x1x10'

// const arr = str.split('x').map(item => Number(item));
// console.log(arr);

// const arr1 = arr.filter(item => item !== Math.max(...arr));
// console.log(arr1);

// const result =
//   arr[0] * arr[1] * 2 +
//   arr[1] * arr[2] * 2 +
//   arr[2] * arr[0] * 2 +
//   arr1[0] * arr1[1];

// console.log(result);

function part1() {
  const arr1 = input.map((item, index) => {
    const arr = item.split('x').map(item => Number(item));
    const arr1 = arr.sort((a, b) => a - b).slice(0, 2);
    // console.log(arr1);
    const result =
      arr[0] * arr[1] * 2 +
      arr[1] * arr[2] * 2 +
      arr[2] * arr[0] * 2 +
      arr1[0] * arr1[1];
    // console.log(result);
    return result;
  });
  console.log(arr1.reduce((acc, current) => acc + current));
}

function part2() {
  //do something here
  const arr1 = input.map((item, index) => {
    const arr = item.split('x').map(item => Number(item));
    const arr1 = arr.sort((a, b) => a - b).slice(0, 2);
    // console.log(arr1);
    const result =
      arr[0] * arr[1] * arr[2] + arr1[0] + arr1[0] + arr1[1] + arr1[1];
    // console.log(result);
    return result;
  });
  console.log(arr1.reduce((acc, current) => acc + current));
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
