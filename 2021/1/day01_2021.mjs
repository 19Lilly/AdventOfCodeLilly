import { readFileSync } from "node:fs";

const lines = readFileSync("day01_2021.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map(Number); // Split on newline

function part1() {
  let number = 0;
  for (let i = 1; i < lines.length; i++) {
    lines[i] > lines[i - 1] ? number++ : number;
  }
  console.log(number);
}

function part2() {
  let number1 = 0;
  for (let i = 0; i < lines.length - 2; i++) {
    lines[i] + lines[i + 1] + lines[i + 2] <
    lines[i + 1] + lines[i + 2] + lines[i + 3]
      ? number1++
      : number1;
  }
  console.log(number1);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
