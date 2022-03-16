let stdin = process.openStdin();

function drawHourglass(size) {
  let hourglass = [];
  for (let i = 0; i < size; i++) {
    let line = '';
    for (let j = 0; j < size; j++) {
      if(i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        line += '#';
      } else {
        if (i === j || i + j === size - 1) {
          line += '#';
        } else {
          if(i < size / 2) {
              if (i < j && j < size - i) {
                line += '#';
              } else {
                line += ' ';
              }
            } else {
              line += ' ';
            }
          }
      }
    }
    hourglass.push(line);
  }
  return hourglass;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function changeArrayPos(arr, from, to) {
  let temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
}

async function animateHourglass(hourglass) {
  let changed = []
  for (let i = 0; i < hourglass.length / 2; i++) {
    changed = changeArrayPos(hourglass, [i], hourglass.length - [i]);
    console.log(changed.join('\n'));
    await sleep(1000);
    console.clear();
  }
}

console.log('Oi, qual a dimensão da ampulheta? ');
stdin.addListener("data", async (d) => {
  let size = parseInt(d.toString().trim());
  const hourglass = drawHourglass(size);
  console.clear()
  
  await animateHourglass(hourglass);
  process.exit();
});
