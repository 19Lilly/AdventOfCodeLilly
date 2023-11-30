import { readFileSync } from "node:fs";

const lines = readFileSync("day05_2022.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n");

let stack = [
  [],
  ["S", "M", "R", "N", "W", "J", "V", "T"],
  ["B", "W", "D", "J", "Q", "P", "C", "V"],
  ["B", "J", "F", "H", "D", "R", "P"],
  ["F", "R", "P", "B", "M", "N", "D"],
  ["H", "V", "R", "P", "T", "B"],
  ["C", "B", "P", "T"],
  ["B", "J", "R", "P", "L"],
  ["N", "C", "S", "L", "T", "Z", "B", "W"],
  ["L", "S", "G"],
];

// let stack = [[], ["Z", "N"], ["M", "C", "D"], ["P"]];

// Return a new object to avoid side effects between part 1 and 2

function part1() {
  let stack = [
    [],
    ["S", "M", "R", "N", "W", "J", "V", "T"],
    ["B", "W", "D", "J", "Q", "P", "C", "V"],
    ["B", "J", "F", "H", "D", "R", "P"],
    ["F", "R", "P", "B", "M", "N", "D"],
    ["H", "V", "R", "P", "T", "B"],
    ["C", "B", "P", "T"],
    ["B", "J", "R", "P", "L"],
    ["N", "C", "S", "L", "T", "Z", "B", "W"],
    ["L", "S", "G"],
  ];
  //do something here
  lines
    .map((item) => item.match(/\d+\s?/g))
    .map((arr) => {
      const [num1, num2, num3] = [
        Number(arr[0]),
        Number(arr[1]),
        Number(arr[2]),
      ];

      stack[num2]
        .splice(-num1)
        .reverse()
        .map((item) => stack[num3].push(item));
    });
  console.log({
    result1: stack
      .map((arr) => {
        return arr.length === 0 ? null : arr[arr.length - 1];
      })
      .splice(1)
      .join(""),
  });
}

function part2() {
  let stack = [
    [],
    ["S", "M", "R", "N", "W", "J", "V", "T"],
    ["B", "W", "D", "J", "Q", "P", "C", "V"],
    ["B", "J", "F", "H", "D", "R", "P"],
    ["F", "R", "P", "B", "M", "N", "D"],
    ["H", "V", "R", "P", "T", "B"],
    ["C", "B", "P", "T"],
    ["B", "J", "R", "P", "L"],
    ["N", "C", "S", "L", "T", "Z", "B", "W"],
    ["L", "S", "G"],
  ];
  //do something here
  lines
    .map((item) => item.match(/\d+\s?/g))
    .map((arr) => {
      const [num1, num2, num3] = [
        Number(arr[0]),
        Number(arr[1]),
        Number(arr[2]),
      ];

      stack[num2].splice(-num1).map((item) => stack[num3].push(item));
    });
  console.log({
    result2: stack
      .map((arr) => {
        return arr.length === 0 ? null : arr[arr.length - 1];
      })
      .splice(1)
      .join(""),
  });
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
