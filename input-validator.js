export async function validateInput(input) {
  if (isNaN(input)) {
    console.log("Preciso que você insira um número.");
    return false;
  }
  if (input < 10 || input > 40) {
    console.log(
      "Oops me desculpe mas, para uma melhor experiência, use um número de 10 a 40."
    );
    return false;
  }
  return true;
}
