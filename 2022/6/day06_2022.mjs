import { readFileSync } from "node:fs";

const lines = readFileSync("day06_2022.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim()
  .split("\n")
  .map(Number); // Remove starting/ending whitespace // Split on newline

// console.log(lines);

console.log(number);
console.log(number1);

function part1() {}

function part2() {}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
