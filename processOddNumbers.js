function OddNums(arr) {
  let final = arr
    .filter((x, i) => i % 2 != 0)
    .map(x => x * 2)
    .reverse()
    .join(` `);

    console.log(final);
}

OddNums([10, 15, 20, 25]);