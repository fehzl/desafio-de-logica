import { changeArrayPos, sleep } from "./helpers.js";

export function drawHourglass(size) {
  let hourglass = [];
  for (let row = 0; row < size; row++) {
    let rowElements = "";
    for (let column = 0; column < size; column++) {
      if (
        row === 0 ||
        row === size - 1 ||
        column === 0 ||
        column === size - 1
      ) {
        rowElements += "#";
      } else {
        if (row === column || row + column === size - 1) {
          rowElements += "#";
        } else {
          if (row < size / 2) {
            if (row < column && column < size - row) {
              rowElements += "#";
            } else {
              rowElements += " ";
            }
          } else {
            rowElements += " ";
          }
        }
      }
    }
    hourglass.push(rowElements);
  }
  return hourglass;
}

export async function animateHourglass(hourglass) {
  let changedHourglass = [];
  for (let i = 0; i < hourglass.length / 2; i++) {
    changedHourglass = changeArrayPos(hourglass, [i], hourglass.length - [i]);
    console.log(changedHourglass.join("\n"));
    await sleep(1000);
    console.clear();
  }
}
