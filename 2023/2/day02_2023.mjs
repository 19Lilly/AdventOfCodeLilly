import { readFileSync } from "node:fs";

const lines = readFileSync("day02_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const result = lines
  .map((line) => line.split(/(?:,|;|:)+/))
  .map((arr) => arr.flatMap((item) => item.trim()))
  .map((item) => item.slice(1))
  .map((item) => item.map((item) => item.split(" ")))
  .map((item) =>
    item.map((item) => {
      return [+item[0], item[1]];
    })
  );

function part1() {
  let indexes = [];
  result
    .map((item) => {
      item.map((item) => {
        item[0] > 12 && item[1] === "red"
          ? item.push(false)
          : item[0] > 13 && item[1] === "green"
          ? item.push(false)
          : item[0] > 14 && item[1] === "blue"
          ? item.push(false)
          : item.push(true);
      });
      return item;
    })
    .map((arr, index) =>
      arr.every((item) => item[2] === true) ? indexes.push(index + 1) : null
    );

  console.log(indexes.reduce((acc, curr) => acc + curr, 0));
}

function part2() {
  const result2 = result
    .map((arr) => {
      let res1 = new Array(3);
      res1[0] = arr
        .filter((item) => item[1] === "red")
        .map((item) => item[0])
        .sort((a, b) => b - a)[0];
      res1[1] = arr
        .filter((item) => item[1] === "green")
        .map((item) => item[0])
        .sort((a, b) => b - a)[0];
      res1[2] = arr
        .filter((item) => item[1] === "blue")
        .map((item) => item[0])
        .sort((a, b) => b - a)[0];
      return res1.reduce((acc, curr) => acc * curr);
    })
    .reduce((acc, curr) => acc + curr, 0);

  console.log(result2);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
