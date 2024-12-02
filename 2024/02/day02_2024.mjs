import { readFileSync } from 'node:fs';

const input = readFileSync('day02_2024.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n')
  .map(arr => arr.split(' '))
  .map(arr => arr.map(item => Number(item)));

// console.log(input);

function part1() {
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
    let arrLength;
    // console.log(arr);
    const arr1 = arr
      .map((_, index, array) => {
        arrLength = array.length - 1;
        if (index < array.length) {
          return array[index] < array[index + 1];
        }
      })
      .splice(0, arrLength);

    const arr2 =
      arr1.every(item => item === true) || arr1.every(item => item === false)
        ? true
        : false;

    return arr2;
  };

  console.log(
    input
      .map(array => {
        const differences = difference(array);

        return isBetweenOneAndThree(differences) &&
          isAllItemIncreaseOrDecrease(array)
          ? 1
          : 0;
      })
      .reduce((acc, curr) => acc + curr, 0)
  );
}

function part2() {
  //do something here
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
