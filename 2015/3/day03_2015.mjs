import { readFileSync } from 'node:fs';

const input = readFileSync('day03_2015.txt', { encoding: 'utf-8' }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split(''); // Split on newline
//.map(Number(item)) // convert string to number
const pointsOfDelivery = array => {
  let startPoint = [0, 0];
  return array.map(item => {
    switch (item) {
      case '<':
        startPoint = [startPoint[0] - 1, startPoint[1]];
        break;
      case '>':
        startPoint = [startPoint[0] + 1, startPoint[1]];
        break;
      case '^':
        startPoint = [startPoint[0], startPoint[1] - 1];
        break;
      case 'v':
        startPoint = [startPoint[0], startPoint[1] + 1];
        break;
    }
    return startPoint;
  });
};

const findUniqueHouses = array => {
  return Array.from(new Set(array.map(item => JSON.stringify(item)))).map(
    item => JSON.parse(item)
  );
};

function part1() {
  //do something here

  const arr1 = pointsOfDelivery(input);
  const uniqueItems = findUniqueHouses(arr1);
  // console.log(uniqueItems.length);
}

function part2() {
  const santaArray = input.filter((_, index) => index % 2 === 0);
  const roboSantaArray = input.filter((_, index) => index % 2 !== 0);
  const santasHouses = pointsOfDelivery(santaArray);
  const roboSantaHouses = pointsOfDelivery(roboSantaArray);
  const allHouses = [...santasHouses, ...roboSantaHouses];
  console.log(findUniqueHouses(allHouses).length);
}

part1();
part2();

//template using from https://github.com/tpatel/advent-of-code-2022/blob/main/template.mjs
