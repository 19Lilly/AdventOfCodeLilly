import { readFileSync } from "node:fs";

const input = readFileSync("day02_2021.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function part1() {
  let horizontal = 0;
  let depth = 0;
  input
    .map((item) => item.split(" "))
    .map((item) => {
      const [move, number] = [item[0].slice(0, 1), Number(item[1])];
      move === "f"
        ? (horizontal += number)
        : move === "d"
        ? (depth += number)
        : (depth -= number);
    });
  const result = horizontal * depth;
  console.log(result);
}

function part2() {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  input
    .map((item) => item.split(" "))
    .map((item) => {
      const [move, number] = [item[0].slice(0, 1), Number(item[1])];
      move === "f"
        ? ((horizontal += number), (depth += aim * number))
        : move === "d"
        ? (aim += number)
        : (aim -= number);
    });

  const result = horizontal * depth;
  console.log(result);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
