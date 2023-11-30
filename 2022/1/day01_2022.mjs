"use strict";

import { readFileSync } from "node:fs";

const elves = readFileSync("day01_2022.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...elves];
}

function part1() {
  const input = getInput();
  const calories = input.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });
  //do something here
  console.log(Math.max(...calories));
}

function part2() {
  const input = getInput();
  const calories = input.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0);
  });
  //do something here
  calories.sort((a, b) => b - a);
  console.log(
    calories.slice(0, 3).reduce((previous, current) => previous + current, 0)
  );
}

part1();
part2();
