import { readFileSync } from "node:fs";

const input = readFileSync("day03_2021.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((str) => str.split(""));

let arr = new Array(input[0].length).fill("");
for (let i = 0; i < input[0].length; i++) {
  for (let j = 0; j < input.length; j++) {
    arr[i] += input[j][i];
  }
}

console.log(arr);
console.log(input);

function fromBinaryToDecimal(arr) {
  return arr
    .reverse()
    .map((num, index) => Math.pow(2, index) * num)
    .reduce((acc, curr) => acc + curr, 0);
}

function part1() {
  const gammaBinary = arr
    .map((line) => line.split(""))
    .map((arr) => arr.map((arr) => Number(arr)))
    .map((arr) => arr.reduce((acc, curr) => acc + curr, 0))
    .map((num) => (num > input.length / 2 ? 1 : 0));
  const epsilonBinary = gammaBinary.map((num) => (num === 1 ? 0 : 1));
  const gammaDecimal = fromBinaryToDecimal(gammaBinary);
  const epsilonDecimal = fromBinaryToDecimal(epsilonBinary);
  const result = gammaDecimal * epsilonDecimal;
  console.log(result);
}

function part2() {
  function more0or1(arr) {
    return arr
      .map((line) => line.split(""))
      .map((arr) => arr.map((arr) => Number(arr)))
      .map((arr) => arr.reduce((acc, curr) => acc + curr, 0))
      .map((num) => (num > input.length / 2 ? 1 : 0));
  }
  const z = more0or1(arr);
  const result = input.map((arr) => console.log(arr));
  // console.log(result);
  // console.log(z);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
