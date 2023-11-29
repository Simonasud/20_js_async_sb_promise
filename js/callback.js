"use strict";
console.log("callback.js file was loaded");

// const x = 50;

// setTimeout(() => {
//   confirm("ar tikrai");
// }, 5000);

// console.log("Hello");

// function sum(n1, n2, callback) {
//   let suma = n1 + n2;
//   callback(suma);
// }

// sum(15, 20, makeCurrency);

// function makeCurrency(val) {
//   console.log(`$${val.toFixed(2)}`);
// }
// makeCurrency(2.5)

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");

function getHeader(callback) {
  setTimeout(() => {
    console.log("<Header />");
    callback();
  }, 1500);
}
function getContent(callback) {
  setTimeout(() => {
    console.log("<Main Content />");
    callback();
  }, 500);
}
function getFooter() {
  setTimeout(() => {
    console.log("<Footer />");
  }, 2000);
}

//kvieciam funkcija eiles tvarka
//callback hell
getHeader(() => {
  getContent(() => {
    getFooter();
  });
});
