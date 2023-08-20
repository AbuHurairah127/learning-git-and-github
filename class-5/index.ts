// // Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

// // Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
// function sum(array: number[]) {
//   let i: number = 1;
//   var sum: number = 0;
//   while (i <= array.length - 1) {
//     sum = sum + array[i];
//     i++;
//   }
//   return sum;
// }
// // last Index = array.length - 1
// // let result = sum([1, 2, 3, 4, 5]);
// console.log("result of funciton", sum([10, 20, 30, 40, 50]));

// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2[4]);

// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num1: number) {
  if (num1 > 0) {
    let result: number = num1; //5
    num1--; //4
    while (num1 > 0) {
      result = result * num1; //5
      num1--;
    }
    console.log(result);

    return;
  }
  console.log("Number is zero or -ve");
}

factorial(5);

// num1 * num1 - 1 + num1 * num1 - 2 + 0;

// 5 * 5 * 4 * 5 * 3 * 5 * 2 * 5 * 1

// 5 * 4 * 3 * 2 * 1;
