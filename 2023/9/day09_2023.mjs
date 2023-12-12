import { readFileSync } from "node:fs";

const input = readFileSync("day09_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((item) => item.split(","))
  .map((item) => item.flatMap((item) => item.split(" "))) //convert string to array of strings
  .map((item) => item.map((item) => Number(item))); //convert strings in array to number

function part1() {
  //solution with help of https://github.com/katemihalikova/advent-of-code/blob/latest/2023/09.js
  const predictNextNumber = (array) => {
    if (array.every((n) => n === 0)) return 0;
    let diff = array
      .slice(0, -1)
      .map((_, index) => array[index + 1] - array[index]);
    return array.at(-1) + predictNextNumber(diff);
  };

  const result = input
    .map((item) => predictNextNumber(item))
    .reduce((acc, curr) => acc + curr, 0);
  console.log(result);
}

function part2() {
  //do something here
  const predictPreviousNumber = (array) => {
    if (array.every((n) => n === 0)) return 0;
    let diff = array
      .slice(0, -1)
      .map((_, index) => array[index + 1] - array[index]);
    return array.at(0) - predictPreviousNumber(diff);
  };

  const result = input
    .map((item) => predictPreviousNumber(item))
    .reduce((acc, curr) => acc + curr, 0);
  console.log(result);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
