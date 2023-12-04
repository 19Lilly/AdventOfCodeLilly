import { readFileSync } from "node:fs";

const input = readFileSync("day04_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((item) => item.split(/(?::|\|)+/))
  .map((item) => item.slice(1))
  .map((item) => item.map((item) => item.match(/\d+/g))); // Split on newline
//.map(Number(item)) // convert string to number

function part1() {
  const res = input
    .map((item) => item[1].filter((x) => item[0].includes(x)))
    .map((item) => (item.length === 0 ? 0 : 2 ** (item.length - 1)))
    .reduce((acc, curr) => acc + curr, 0);
  console.log(res);
}

function part2() {
  const numberOfRepetition = input
    .map((item) => item[1].filter((x) => item[0].includes(x)))
    .map((item) => item.length);
  console.log(numberOfRepetition);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
