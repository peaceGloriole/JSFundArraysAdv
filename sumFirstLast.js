function firstLast(arr) {
let result = 0;

let first = Number(arr.shift());
let last = Number(arr.pop());

result = first + last;
console.log(result);
}

firstLast(['20', '30', '40']);