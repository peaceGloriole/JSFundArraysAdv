function smallestNums(arr) {
  let sorting = arr.sort((a, b) => {
    return a - b;
  });
  
  let small = sorting
    .slice(0, 2)
    .join(` `);

  console.log(small);
}

smallestNums([30, 15, 50, 5]);