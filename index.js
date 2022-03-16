import { drawHourglass, animateHourglass } from "./draw-hourglass.js";
import { sleep } from "./helpers.js";
import { validateInput } from "./input-validator.js";

const stdin = process.openStdin();

console.log("Oi, qual a dimensão da ampulheta? ");
stdin.addListener("data", async (inputValue) => {
  let size = parseInt(inputValue.toString().trim());
  
  const isValid = await validateInput(size);
  if (isValid) {
    let hourglass = drawHourglass(size);
    await animateHourglass(hourglass);
    console.log("Obrigado por usar o programa :)");
    await sleep(1000);
    process.exit();
  }
});
