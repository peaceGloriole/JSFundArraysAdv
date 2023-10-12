function arrManipul(arr) {
  // split the original massive and get the first index and convert into Number
  let newArr = arr
    .shift()
    .split(` `)
    .map(Number);
// loop through the original arr
  for (let i = 0; i < arr.length; i++) {
    // separate commands from numbers
    let [command, num, index] = arr[i].split(` `);

    num = Number(num);
    index = Number(index);
// check every command and do operations
    switch (command) {
      case `Add`: add(num); break;
      case `Remove`: remove(num); break;
      case `RemoveAt`: removeAt(num); break;
      case `Insert`: insert(num, index); break;
    }

  }
// 4 functions for the different commands
  function add(el) {
    newArr.push(el);
  }

  function remove(num) {
    newArr = newArr.filter(el => el !== num);
  }

  function removeAt(index) {
    newArr.splice(index, 1);
  }

  function insert(num, index) {
    newArr.splice(index, 0, num);
  }
  
  console.log(newArr.join(` `));
}

arrManipul([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3'
]);