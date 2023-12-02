import { readFileSync } from "node:fs";

const input = readFileSync("day??.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline



function part1() {

}

function part2() {

}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
