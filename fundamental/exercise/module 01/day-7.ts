//create a function to check if 2 objects are equal
const obj1a = {
  a: 2,
};
const obj1b = {
  a: 3,
};

interface IObj {
  [keys: string]: any;
}

function isEquivalent(a: IObj, b: IObj) {
  let aProps = Object.keys(a);
  let bProps = Object.keys(b);
  //console.log(aProps, bProps);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let t = aProps[i];
    for (let j = 0; j <= i; j++) {
      let k = bProps[j];
      if (a[t] != b[k]) return false;
    }
  }
  return true;
}

console.log(isEquivalent(obj1a, obj1b));

//create a function to get intersection of 2 objects
const obj2a = {
  a: 1,
  b: 2,
};

const obj2b = {
  a: 1,
  c: 3,
};

function intersection(obj1: IObj, obj2: IObj) {
  const newObj: IObj = {};
  for (const key in obj1) {
    if (obj1[key] == obj2[key]) {
      newObj[key] = obj1[key];
    }
  }
  return newObj;
}
console.log(intersection(obj2a, obj2b));

//a function to merge two array of data and remove duplicate data
class Student2 {
  name: string;
  email: string;
  constructor(nama: string, email: string) {
    this.name = nama;
    this.email = email;
  }
}

function mergeData(std1: Student2[], std2: Student2[]) {
  const notInStudent1: Student2[] = std2.filter((s2) => {
    const index = std1.findIndex(
      (s1) => s1.email == s2.email && s1.name == s2.name
    );
    if (index == -1) return true;
    return false;
  });

  return std1.concat(notInStudent1);
}

console.log(
  mergeData(
    [
      new Student2("student1", "s1@mail.com"),
      new Student2("student2", "s2@mail.com"),
    ],
    [
      new Student2("student1", "s1@mail.com"),
      new Student2("student2", "s2@mail.com"),
      new Student2("student3", "s3@mail.com"),
    ]
  )
);

//a function that can switch all values into property and vise versa

const switch2 = function (arr: IObj[]) {
  const arrEntries = arr.map((obj) => Object.entries(obj));
  const swap = arrEntries.map((val) => {
    return val.map((val2) => {
      return [val2[1], val2[0]];
    });
  });

  const swap2: any[] = [];
  for (let i = 0; i < arrEntries.length; i++) {
    const temp1: any[] = [];

    for (let j = 0; j < arrEntries[i].length; j++) {
      const temp2 = [arrEntries[i][j][1], arrEntries[i][j][0]];
      temp1.push(temp2);
    }
    swap2.push(temp1);
  }

  return swap.map((entries) => {
    return Object.fromEntries(entries);
  });
};

switch2([{ name: "David", age: "20" }]);
console.log(switch2([{ name: "David", age: "20" }]));

// Create a function to find a factorial number using recursion
const factorial = (n: number): number => {
  // n = 5
  if (n == 1) return n;
  return n * factorial(n - 1);
};

console.log(factorial(5));

//shooting game between two player

class PlayerB {
  private name: string;
  private health: number = 100;
  private power: number = 10;
  constructor(name: string) {
    this.name = name;
  }

  demage(power: number) {
    if (this.health > this.power) this.health -= power;
    else this.health = 0;
  }

  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power}) `
    );
  }

  get h() {
    return this.health;
  }

  get p() {
    return this.power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }
}

class ShootingGame2 {
  player1: PlayerB;
  player2: PlayerB;
  constructor(player1: PlayerB, player2: PlayerB) {
    this.player1 = player1;
    this.player2 = player2;
  }

  private random() {
    return Math.floor(Math.random() * 2);
  }

  private getRandomItem(): {
    health: number;
    power: number;
  } {
    return this.random() == 1
      ? { health: 0, power: 10 }
      : { health: 10, power: 0 };
  }

  start() {
    while (this.player1.h > 0 && this.player2.h > 0) {
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());
      if (this.random() > 0) {
        this.player1.demage(this.player2.p);
        if (this.player1.h == 0) break;
        this.player2.demage(this.player1.p);
      } else {
        this.player2.demage(this.player1.p);
        if (this.player2.h == 0) break;
        this.player1.demage(this.player2.p);
      }
    }
    this.player1.showStatus();
    this.player2.showStatus();
  }
}
const pemain1 = new PlayerB("Jordan");
const pemain2 = new PlayerB("Justin");

const gameNew = new ShootingGame2(pemain1, pemain2);
gameNew.start();
