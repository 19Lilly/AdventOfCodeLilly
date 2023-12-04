import { readFileSync } from "node:fs";

const input = readFileSync("day04_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((item) => item.split(/(?::|\|)+/))
  .map((item) => item.slice(1))
  .map((item) => item.map((item) => item.match(/\d+/g)));

function part1() {
  const res = input
    .map((item) => item[1].filter((x) => item[0].includes(x)))
    .map((item) => (item.length === 0 ? 0 : 2 ** (item.length - 1)))
    .reduce((acc, curr) => acc + curr, 0);
  // console.log(res);
}

function part2() {
  const matchingList = input.map((card) => {
    let matching = 0;
    card[1].forEach((number) => {
      if (card[0].includes(number)) {
        matching++;
      }
    });
    return matching;
  });

  const countSelfAndSpawnedCards = (matchArr, index) => {
    let cards = 1;
    for (let i = 0; i < matchArr[index]; i++) {
      cards += countSelfAndSpawnedCards(matchArr, index + 1 + i);
    }
    return cards;
  };

  const sum = matchingList.reduce(
    (sum, _, i, arr) => sum + countSelfAndSpawnedCards(arr, i),
    0
  );
  console.log(sum);
}
part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
//part2 solution: https://github.com/TunHuang/advent-of-code-2023/blob/main/day-04/index.js
