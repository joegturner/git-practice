/** Practice sites */
// https://david.elbe.me/developers/hiring/2014/09/17/fizzbuzz-alternatives.html

const answerBox = document.getElementById("answer-box");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const textA = document.getElementById("textA");
const textB = document.getElementById("textB");
const textC = document.getElementById("textC");

let message = ``;

buttonA.addEventListener("click", () => {
  message = printFizzBuzz();
  answerBox.innerHTML = message;
});

buttonB.addEventListener("click", () => {
  message = `Anagram? ${anagram(textA.value, textB.value)}`;
  answerBox.innerHTML = message;
});

buttonC.addEventListener("click", () => {
  message = `Tax: ${calcTax(
    parseInt(textA.value),
    parseInt(textB.value)
  )} cents`;
  answerBox.innerHTML = message;
});

buttonD.addEventListener("click", () => {
  const liters = calcVol(
    parseInt(textA.value),
    parseInt(textB.value),
    parseInt(textC.value)
  );
  if (liters < 0) {
    message = `${liters * -1} liters short of 1 liter`;
  } else {
    message = `vol over 1 liter: ${liters} liters`;
  }

  answerBox.innerHTML = message;
});

printFizzBuzz = () => {
  message = `<p>`;
  for (let i = 1; i < 101; i++) {
    if (i === 1) {
      message = message + `${i}`;
    } else {
      if (i % 3 === 0) {
        message = message + `, FIZZ`;
      } else if (i % 5 === 0) {
        message = message + `, BUZZ`;
      } else {
        message = message + `, ${i}`;
      }
    }
  }
  message = message + `</p>`;

  return message;
};

anagram = (stringA, stringB) => {
  if (stringA.length !== stringB.length) {
    return false;
  } else {
    return (
      stringA.split("").sort().join("") === stringB.split("").sort().join("")
    );
  }
};

calcTax = (cost, taxRate) => {
  return [cost * taxRate];
};

calcVol = (a, b, c) => {
  const cubicCm = a * b * c;
  const liter = cubicCm / 1000 - 1;

  return liter.toFixed(2);
};

/*****************/
/** Free Code Camp Practice **/

// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
function sym(...args) {
  let arr = [];
  let arrays = args;
  const count = args.length - 1;
  for (let j = 0; j < count; j++) {
    arr = [];
    for (let i = 0; i < arrays[0].length; i++) {
      if (!arrays[1].includes(arrays[0][i]) && !arr.includes(arrays[0][i])) {
        arr.push(arrays[0][i]);
      }
    }
    for (let i = 0; i < arrays[1].length; i++) {
      if (!arrays[0].includes(arrays[1][i]) && !arr.includes(arrays[1][i])) {
        arr.push(arrays[1][i]);
      }
    }

    arr = arr.sort();
    arrays.shift();
    arrays.shift();
    arrays.unshift(arr);
  }

  return arr;
}
/** recursion style */
function sym(...args) {
  let arr = [];
  for (let i = 0; i < args[0].length; i++) {
    if (!args[1].includes(args[0][i]) && !arr.includes(args[0][i])) {
      arr.push(args[0][i]);
    }
  }
  for (let i = 0; i < args[1].length; i++) {
    if (!args[0].includes(args[1][i]) && !arr.includes(args[1][i])) {
      arr.push(args[1][i]);
    }
  }
  arr = arr.sort();
  args.shift();
  args.shift();

  if (args.length === 0) {
    return arr;
  } else {
    sym(arr, ...args);
  }
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5], [1, 4, 5]);

//   let arr = [];
//   for (let i = 0; i < arrA.length; i++) {
//     if (!arrB.includes(arrA[i]) && !arr.includes(arrA[i])) {
//       arr.push(arrA[i]);
//     }
//   }
//   for (let i = 0; i < arrB.length; i++) {
//     if (!arrA.includes(arrB[i]) && !arr.includes(arrB[i])) {
//       arr.push(arrB[i]);
//     }
//   }
//   console.log(`after A^B: ${arr}`);
//   if (arrC) {
//     arr = sym(arr, arrC);

// for (let i = 0; i < arr.length; i++) {
//   if (!arrC.includes(arr[i])) {
//     arr.push(arrC[i]);
//     console.log(arr);
//   } else if (arrC.includes(arr[i])) {
//     console.log(arr[i]);
//     arr.pop(arr[i]);
//     console.log(arr);
//   }
// }
// for (let i = 0; i < arrC.length; i++) {
//   if (!arr.includes(arrC[i])) {
//     arr.push(arrC[i]);
//   }
// }
//   }

/** End */

// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

// brute force method
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].includes(arr1[i][1])) {
        arr1[i][0] += arr2[j][0];
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j].includes(arr2[i][1])) {
        found = true;
      }
    }
    if (found === false) {
      arr1.push(arr2[i]);
    }
  }
  arr1.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(arr1);
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
