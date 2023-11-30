"use strict";

import { readFileSync } from "node:fs";

const points = readFileSync("day02_2022.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...points];
}

// console.log(valuePairsArr);

function part1() {
  const input = getInput();
  const combinations = input.flatMap((valuePair) => {
    const items = valuePair.replace(/ /g, "").split("\n");
    return items;
  });

  const valuePairsArr = {
    AX: 4,
    AY: 8,
    AZ: 3,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 7,
    CY: 2,
    CZ: 6,
  };

  const pointsFromCombination = combinations
    .map((item) => {
      return item === "AX"
        ? valuePairsArr.AX
        : item === "AY"
        ? valuePairsArr.AY
        : item === "AZ"
        ? valuePairsArr.AZ
        : item === "BX"
        ? valuePairsArr.BX
        : item === "BY"
        ? valuePairsArr.BY
        : item === "BZ"
        ? valuePairsArr.BZ
        : item === "CX"
        ? valuePairsArr.CX
        : item === "CY"
        ? valuePairsArr.CY
        : valuePairsArr.CZ;
    })
    .reduce((acc, cur) => acc + cur, 0);

  console.log(pointsFromCombination);
}

function part2() {
  const input = getInput();
  const combinations = input.flatMap((valuePair) => {
    const items = valuePair.replace(/ /g, "").split("\n");
    return items;
  });

  const valuePairsArr = {
    AX: 3,
    AY: 4,
    AZ: 8,
    BX: 1,
    BY: 5,
    BZ: 9,
    CX: 2,
    CY: 6,
    CZ: 7,
  };

  const pointsFromCombination = combinations
    .map((item) => {
      return item === "AX"
        ? valuePairsArr.AX
        : item === "AY"
        ? valuePairsArr.AY
        : item === "AZ"
        ? valuePairsArr.AZ
        : item === "BX"
        ? valuePairsArr.BX
        : item === "BY"
        ? valuePairsArr.BY
        : item === "BZ"
        ? valuePairsArr.BZ
        : item === "CX"
        ? valuePairsArr.CX
        : item === "CY"
        ? valuePairsArr.CY
        : valuePairsArr.CZ;
    })
    .reduce((acc, cur) => acc + cur, 0);

  console.log(pointsFromCombination);
}

part1();
part2();
