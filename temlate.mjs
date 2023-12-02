import { readFileSync } from "node:fs";

const input = readFileSync("day??.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline
  //.map(Number(item)) // convert string to number



function part1() {
 
  //do something here
}

function part2() {
 
  //do something here
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
