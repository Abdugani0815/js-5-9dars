let ism = "Jasurbek";
let familiya = "Karimbayev";
let yosh = 14;
let uylangan = false;

let obj1 = {
  ism: "Jasurbek",
  familiya: "Karimbayev",
  yosh: 14,
  uylangan: false,
};

// console.log(obj1.familiya);

// ------------------------------

let array = ["Jasurbek", "Abdurazzoq", 23, 35, true];
// console.log(array[array.length - 1]);

// for loop;

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// -----------------------------

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// -----------------------------

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' juft son');
//   } else {
//     console.log(i + ' toq son');
//   }
// }

// uyga vazifa:
let sonlar = [2, 4, 9, 10, 45, 67, 8, 90, 12, 33];

let juftSon = [];
let toqSon = [];



for (let i = 0; i < sonlar.length; i++) {
  if (sonlar[i] % 2 === 0) {
    juftSon.push(sonlar[i]);
  } else {
    toqSon.push(sonlar[i]);
  }
}

console.log(juftSon);
console.log(toqSon);

