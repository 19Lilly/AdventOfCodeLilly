import { readFileSync } from "node:fs";

const input = readFileSync("day15_2023.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split(","); // Split on newline

const hashMap = (array) =>
  array.reduce((acc, curr) => {
    return (acc = ((acc + curr) * 17) % 256);
  }, 0);

function part1() {
  const adaptedInput = input
    .map((item) => item.split(""))
    .map((item) => item.map((item) => item.charCodeAt()));

  const final = adaptedInput
    .map((item) => hashMap(item))
    .reduce((acc, curr) => acc + curr, 0);
  console.log(final);
}

function part2() {
  const changedInput = input.map((item) => {
    let [, str, symbol, number] = item.match(/^(\w+)([-=])(\d+)?$/);
    number = Number(number);
    return { str, symbol, number };
  });

  let boxes = Array(256)
    .fill()
    .map(() => ({}));

  for (let { str, symbol, number } of changedInput) {
    let box = hashMap(str.split("").map((item) => item.charCodeAt()));
    if (symbol === "-") {
      delete boxes[box][str];
    } else {
      boxes[box][str] = number;
    }
  }

  console.log(
    boxes
      .flatMap((box, boxNumber) =>
        Object.values(box).map(
          (focalLength, slotNumber) =>
            (boxNumber + 1) * (slotNumber + 1) * focalLength
        )
      )
      .reduce((sum, n) => sum + n, 0)
  );
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
