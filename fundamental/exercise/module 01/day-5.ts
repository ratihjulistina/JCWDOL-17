//BAGIAN 1
console.log("Exercise Bagian 1");
console.log("--------------------------------------");

//get the lowes, highest, and average value in array
const angka: number[] = [12, 5, 23, 18, 4, 45, 32];

//with sort function
angka.sort(function (a, b) {
  return a - b;
});
let lowest = angka[0];

angka.sort(function (a, b) {
  return b - a;
});
let highest = angka[0];

//average
function average(array: number[]) {
  let sum: number = 0;
  for (let i = 0; i < angka.length; i++) {
    sum = sum + angka[i];
  }
  let att: number = sum / angka.length;
  return att;
}

const avg = average(angka);

// console.log(angka.length);

console.log("1 a. The lowest number is ", lowest);
console.log("1 b. The highest number is ", highest);
console.log("1 c. The average number is ", avg);

//returns a string and seperated with commas and the last word with and "and"
const buah: string[] = ["apple", "banana", "cherry", "date"];
//console.log(buah.join(","));

let resuld: string = "";
let separator: string;
for (let i = 0; i < buah.length; i++) {
  if (i < buah.length - 2) {
    separator = ", ";
  } else if (i == buah.length - 2) {
    separator = " and ";
  } else {
    separator = "";
  }
  resuld += buah[i] + separator;
}

console.log("2. Jadinya ", resuld);

//return the second smallest number

const angka3: number[] = [5, 3, 1, 7, 2, 6];

const angka3b = angka3.sort(function (a, b) {
  return a - b;
});
console.log("3. The second smallest number is", angka3b[1]);

//sum 2 array with the same position

const array1: number[] = [1, 2, 3];
const array2: number[] = [3, 2, 1];

function jumlahArray(a: number[], b: number[]) {
  let jumlah = [0];
  for (let k = 0; k < a.length; k++) {
    jumlah[k] = a[k] + b[k];
  }
  return jumlah;
}

console.log("4. The array sum is ", jumlahArray(array1, array2));

//a function that adds an element

const array4: number[] = [1, 2, 3, 4];
array4.push(4);
console.log("5. The new array is", array4);

//BAGIAN 2
console.log("Exercise Bagian 2");
console.log("--------------------------------------");

//a function of the sum different data type
const mixedArray = ["3", 1, "string", null, false, undefined, 2];

const sumNumberOnly = (mixed: any[]) =>
  mixed.reduce(
    (sum: number, element: any) =>
      typeof element == "number" ? sum + element : sum,
    0
  );

console.log("1. The sum of all the number only is ", sumNumberOnly(mixedArray));

//write a function to insert multiple giver integer to an array, and have maximum size.

const insertNumbers = (max: number, ...numbers: number[]) =>
  console.log([...new Array(max)].map((n, i) => numbers[i]));

console.log("2. The array is ");
insertNumbers(5, 5, 10, 24, 3, 6, 7, 8);

//function to combine 2 given array
const array3a: number[] = [1, 2, 3];
const array3b: number[] = [4, 5, 6];

const combine = (a: number[], b: number[]) => console.log(a.concat(b));

console.log("3. The array is ");
combine(array3a, array3b);

//function to find duplicate
const array4a: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const duplicate = function (a: number[]) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j]) a.splice(j, 1);
    }
  }
  return a;
};
console.log("4. The duplicate value is ", duplicate(array4a));

//function to find the difference from 2 array
const array5a: number[] = [1, 2, 3, 4, 5];
const array5b: number[] = [3, 4, 5, 6, 7];

function diff(a: number[], b: number[]) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        b.splice(j, 1);
      }
    }
  }
  return a.concat(b);
}
console.log("5. The difference value is ", diff(array5a, array5b));

//BAGIAN 3
console.log("Exercise Bagian 3");
console.log("--------------------------------------");

//function that return primitive data only
const arrayMixed: any[] = [1, [], undefined, {}, "string", {}, []];

const primitiveData = (a: any[]) => a.filter((n) => typeof n != "object");
console.log(primitiveData(arrayMixed));

//function that sum the duplicate value only
const array32: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumDuplicate(a: number[]) {
  // a.reduce(
  //   (sum, val) => (a.indexOf(val) != a.lastIndexOf(val) ? sum + val : sum),
  //   0
  // );
  let counter: number = 0;
  let sum: number = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      a[i] == a[j] ? (counter += 1) : counter;
    }
    return a[i] * counter;
  }
}

console.log(sumDuplicate(array32));

//function for a game of rock, paper, scissor
const computer = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];

const rps = (user: string) =>
  console.log(
    `${user} vs ${computer} ${
      (user == "rock" && computer == "scissor") ||
      (user == "paper" && computer == "rock") ||
      (user == "scissor" && computer == "paper")
        ? "win"
        : user == computer
        ? "draw"
        : "lose"
    }`
  );

rps("paper");
