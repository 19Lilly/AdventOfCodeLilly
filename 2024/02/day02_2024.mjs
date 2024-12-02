import { readFileSync } from 'node:fs';

const input = readFileSync('day02_2024.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n')
  .map(arr => arr.split(' '))
  .map(arr => arr.map(item => Number(item)));

// console.log(input);
const difference = array => {
  let arrDiff = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrDiff.push(Math.abs(array[i] - array[i + 1]));
  }
  return arrDiff;
};

const isBetweenOneAndThree = arr => {
  return arr.every(item => {
    return 3 >= item && item > 0;
  });
};

const isAllItemIncreaseOrDecrease = arr => {
  const isIncreasing = arr.every(
    (item, index) => index === 0 || arr[index - 1] < item
  );
  const isDecreasing = arr.every(
    (item, index) => index === 0 || arr[index - 1] > item
  );
  return isIncreasing || isDecreasing;
};

const isSafe = array => {
  const differences = difference(array);
  return (
    isBetweenOneAndThree(differences) && isAllItemIncreaseOrDecrease(array)
  );
};

const isSafeWithRemoval = array => {
  if (isSafe(array)) return true;

  for (let i = 0; i < array.length; i++) {
    const modifiedArray = [...array.slice(0, i), ...array.slice(i + 1)];
    if (isSafe(modifiedArray)) {
      return true;
    }
  }
  return false;
};

function part1() {
  const result = input
    .map(array => (isSafe(array) ? 1 : 0))
    .reduce((acc, curr) => acc + curr, 0);

  console.log(result);
}

function part2() {
  const result = input
    .map(array => (isSafeWithRemoval(array) ? 1 : 0))
    .reduce((acc, curr) => acc + curr, 0);
  console.log(result);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
