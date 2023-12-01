import { readFileSync } from "node:fs";

const lines = readFileSync("day01_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function part1() {
  const input1 = lines
    .map((string) => string.split(""))
    .map((arr) => arr.filter((item) => item.match(/\d+/g)))
    .map((item) => Number(item[0] + item[item.length - 1]))
    .reduce((acc, curr) => acc + curr, 0);
  console.log(input1);
}

function part2() {
  const input2 = lines
    .map((string) =>
      string
        .replace(/oneight/g, "oneeight")
        .replace(/twone/g, "twoone")
        .replace(/eightwo/g, "eighttwo")
        .replace(/eightree/g, "eighttree")
        .replace(/threeight/g, "threeeight")
        .replace(/zero/g, 0)
        .replace(/one/g, 1)
        .replace(/two/g, 2)
        .replace(/three/g, 3)
        .replace(/four/g, 4)
        .replace(/five/g, 5)
        .replace(/six/g, 6)
        .replace(/seven/g, 7)
        .replace(/eight/g, 8)
        .replace(/nine/g, 9)
    )
    .map((string) => string.split(""))
    .map((arr) => arr.filter((item) => item.match(/\d+/g)))
    .map((item) => Number(item[0] + item[item.length - 1]))
    .reduce((acc, curr) => acc + curr, 0);

  console.log(input2);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
