export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function changeArrayPos(arr, from, to) {
  let temp = arr[from];
  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
}
