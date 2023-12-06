import { readFileSync } from "node:fs";

const input = readFileSync("day05_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const inputNumber = input[0]
  .split(" ")
  .slice(1)
  .map((item) => Number(item));

const seedTo = [
  input
    .slice(2, 50)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
  input
    .slice(51, 74)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
  input
    .slice(75, 110)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
  input
    .slice(111, 134)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
  input
    .slice(135, 150)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
  input
    .slice(151, 162)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
  input
    .slice(163)
    .map((item) => item.split(/(?:,|\s)+/))
    .map((item) => item.map((item) => Number(item))),
];

const isInRange = (destination, startNumber, numberOfItem, item) =>
  item >= startNumber && item <= startNumber + numberOfItem - 1 ? true : false;

/*  const inputNumber = [79, 14, 55, 13];
  const seedTo = [
    [
      [50, 98, 2],
      [52, 50, 48],
    ],
    [
      [0, 15, 37],
      [37, 52, 2],
      [39, 0, 15],
    ],
    [
      [49, 53, 8],
      [0, 11, 42],
      [42, 0, 7],
      [57, 7, 4],
    ],
    [
      [88, 18, 7],
      [18, 25, 70],
    ],
    [
      [45, 77, 23],
      [81, 45, 19],
      [68, 64, 13],
    ],
    [
      [0, 69, 1],
      [1, 0, 69],
    ],
    [
      [60, 56, 37],
      [56, 93, 4],
    ],
  ]; */

function getFinalNumber(number) {
  for (let i = 0; i < seedTo.length; i++) {
    let result = seedTo[i].map((item) => {
      return isInRange(item[0], item[1], item[2], number);
    });
    let index = result.indexOf(true);
    if (result.some((item) => item === true)) {
      number = seedTo[i][index][0] + (number - seedTo[i][index][1]);
    } else {
      number;
    }
  }
  return number;
}

const res = inputNumber.map((item) => getFinalNumber(item));
// console.log(res.sort((a, b) => a - b));
console.log(res);

console.log(getFinalNumber(852082783));

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
