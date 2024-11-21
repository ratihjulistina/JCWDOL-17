//exercise 1
//create a triagle pattern
const h: number = 4;
function triangle2(h: number) {
  let angka = 1;
  for (let i = 1; i <= h; i++) {
    let sum = "";
    for (let j = 1; j <= i; j++) {
      sum = sum + (angka > 9 ? angka : "0" + angka + " ");
      angka++;
    }
    console.log(sum);
  }
}
triangle2(4);

//exercise 2
//create a function that can loop and replace the value

const n: number = 15;

function replace(n: number) {
  let a: string = "";

  for (let i: number = 0; i < n; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      a = a + "FizzBuzz ";
    } else if ((i + 1) % 3 == 0) {
      a = a + "Fizz ";
    } else if ((i + 1) % 5 == 0) {
      a = a + "Buzz ";
    } else {
      a = a + (i + 1) + " ";
    }
  }
  return a;
}

console.log("2. Hasilnya: ", replace(n));

//exercise 3
//Calculate body mass index
const weight: number = 53;
const height: number = 163;

function bmi(weight: number, height: number) {
  let bmiCal: number = weight / (height * height);
  let result: string;
  if (bmiCal < 18.5) {
    result = "less weight";
  } else if (bmiCal >= 18.5 && bmiCal <= 24.9) {
    result = "ideal";
  } else if (bmiCal >= 25.0 && bmiCal <= 29.9) {
    result = "overweight";
  } else if (bmiCal >= 30.0 && bmiCal <= 39.9) {
    result = "very overweight";
  } else {
    result = "obesity";
  }
  return result;
}
console.log("3. Hasilnya: ", bmi(53, 163));

//exercise 4
//remove all odd numbers
const arrayAwal: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeOdd = (array: number[]) =>
  console.log(array.filter((x) => x % 2 == 0));

console.log("4. Hasilnya");
removeOdd(arrayAwal);

//exercise 5
const b: string = "Hello World";

const stringToArray = (str: string) =>
  console.log("5. Hasilnya", str.split(" "));

stringToArray(b);
