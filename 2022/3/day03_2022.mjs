"use strict";

import { readFileSync } from "node:fs";

const stringsArr = readFileSync("day03_2022.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// console.log(valuePairsArr);

/* function part1() {
  const result = stringsArr.map((item) => {
    const str = item.slice(0, item.length / 2);
    const str1 = item.slice(item.length / 2);

    const testLetter = str.split("").find((c) => str1.includes(c));

    return /[A-Z]/.test(testLetter)
      ? testLetter.charCodeAt(0) - 38
      : testLetter.charCodeAt(0) - 96;
  });
  console.log(result);
  const sum = result.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  
} */

function part2() {
  function groupByThree([str1, str2, str3, ...rest]) {
    if (rest.length === 0)
      return [[str1, str2, str3].filter((x) => x !== undefined)];
    return [[str1, str2, str3]].concat(groupByThree(rest));
  }
  const groupedArray = groupByThree(stringsArr);

  /*   const result = groupedArray[0][0]
    .split("")
    .find(
      (c) => groupedArray[0][1].includes(c) && groupedArray[0][2].includes(c)
    ); */

  const result = groupedArray.map((arr) => {
    const arr1 = arr[0];
    const arr2 = arr[1];
    const arr3 = arr[2];
    // console.log(arr1);
    const testBackpacks = arr1
      .split("")
      .find((c) => arr2.includes(c) && arr3.includes(c));
    return /[A-Z]/.test(testBackpacks)
      ? testBackpacks.charCodeAt(0) - 38
      : testBackpacks.charCodeAt(0) - 96;
  });
  const sum = result.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
}
// part1();
part2();
