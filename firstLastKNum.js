function sliceKNum(arr) {
  let k = arr.shift();
  console.log(arr.slice(0, k).join(` `));
  console.log(arr.slice(-k).join(` `));

}

sliceKNum([2, 7, 8, 9]);