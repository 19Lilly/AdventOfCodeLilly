import { readFileSync } from "node:fs";

const input = readFileSync("day07_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((item) => item.split(" "))
  .map((item) => [item[0].split(""), item[1]]); //final array of arrays// Split on newline
//.map(Number(item)) // convert string to number

console.log(input);

function part1() {
  const cardsValue = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  function getCombination() {
    return input.map((item, index) => {
      const counts = {};
      item[0].forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
      });
      let combination = Object.values(counts)
        .sort((a, b) => b - a)
        .join("");
      switch (combination) {
        case "11111":
          input[index][2] = 1_000;
          break;
        case "2111":
          input[index][2] = 10_000;
          break;
        case "221":
          input[index][2] = 20_000;
          break;
        case "311":
          input[index][2] = 40_000;
          break;
        case "32":
          input[index][2] = 50_000;
          break;
        case "41":
          input[index][2] = 60_000;
          break;
        default:
          input[index][2] = 70_000;
      }
    });
  }

  getCombination();
  input
    .sort(
      ([[a, b, c, d, e]], [[i, j, k, l, m]]) =>
        cardsValue[a] - cardsValue[i] ||
        cardsValue[b] - cardsValue[j] ||
        cardsValue[c] - cardsValue[k] ||
        cardsValue[d] - cardsValue[l] ||
        cardsValue[e] - cardsValue[m]
    )
    .map((item, index) => (item[2] += index + 1));
  input.sort(([a, b, c], [d, e, f]) => c - f);

  let result = input
    .map((item, index) => (index + 1) * Number(item[1]))
    .reduce((acc, numb) => acc + numb, 0);
  console.log(result);

  // console.log(input);
}

function part2() {
  //do something here
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
