// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let numbersMultipliedByOneHundred = numbers.map(num => num * 100)

let product = function(num) {
  return num * 100
}
let numbersMultipliedByOneHundred2 = numbers.map(product);

console.log(numbersMultipliedByOneHundred, numbersMultipliedByOneHundred2);

/* EXPECTED RESULT

  [10, 20, 30, 40, 50]
*/