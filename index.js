let stdin = process.openStdin();

function drawHourglass(size, sideFilled) {
  for (let i = 0; i < size; i++) {
    let line = '';
    for (let j = 0; j < size; j++) {
      if(i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        line += '#';
      } else {
        if (i === j || i + j === size - 1) {
          line += '#';
        } else {
          if (sideFilled === 'TOP') {
            if(i < size / 2) {
              if (i < j && j < size - i) {
                line += '#';
              } else {
                line += ' ';
              }
            } else {
              line += ' ';
            }
          } else if (sideFilled === 'BOTTOM') {
            if(i > size / 2) {
              if (i >= j && j >= size - i) {
                line += '#';
              } else {
                line += ' ';
              }
            } else {
              line += ' ';
            }
          } else {
            line += ' ';
          } 
        }
      }
    }
    console.log(line);
  }
  console.log(`\n\n\nAmpulheta: ${size}x${size}`);
}

console.log('Oi, qual a dimensão da ampulheta? ');
stdin.addListener("data", function(d) {
  let size = parseInt(d.toString().trim());
  drawHourglass(size, 'BOTTOM');
  process.exit();
});