import { readFileSync } from "node:fs";

const lines = readFileSync("day04_2022.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((item) => item.split(","));
//   console.log(lines)

// Return a new object to avoid side effects between part 1 and 2

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

function part1() {
  const result = lines.map((item) => {
    const arr1 = item
      .slice(0, 1)
      .flatMap((item) => item.split("-"))
      .map((item) => Number(item));

    const arr2 = item
      .slice(1)
      .flatMap((item) => item.split("-"))
      .map((item) => Number(item));

    const testArr1 = range(arr1[0], arr1[1], 1);
    const testArr2 = range(arr2[0], arr2[1], 1);

    const result =
      testArr1.length < testArr2.length
        ? testArr1.every((r) => testArr2.includes(r))
        : testArr2.every((r) => testArr1.includes(r));
    return result;
  });
  //   console.log(result);
  console.log(result.reduce((acc, cur) => (cur === true ? ++acc : acc + 0), 0));
}

function part2() {
  const result = lines.map((item) => {
    const arr1 = item
      .slice(0, 1)
      .flatMap((item) => item.split("-"))
      .map((item) => Number(item));

    const arr2 = item
      .slice(1)
      .flatMap((item) => item.split("-"))
      .map((item) => Number(item));

    const testArr1 = range(arr1[0], arr1[1], 1);
    const testArr2 = range(arr2[0], arr2[1], 1);

    const result =
      testArr1.length < testArr2.length
        ? testArr1.some((r) => testArr2.includes(r))
        : testArr2.some((r) => testArr1.includes(r));
    return result;
  });
  console.log(result.reduce((acc, cur) => (cur === true ? ++acc : acc + 0), 0));
}

part1();
part2();
