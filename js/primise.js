"use strict";
console.log("primise.js file was loaded");

//Promise status gali buti, pending, resolve, reject

//pirksim lektuvo bilietus

//galimi trys variantai
//pirkimo rezultatas
//vykdomas- Pending
//pavyko - Resolve
//nepavyko - Reject

// new Promise((RESOLVE, REJECT) => {})

let pirkimoPazadas = new Promise((resolve, reject) => {
  //imituojam serverio apdorojimo laika 2 sek
  setTimeout(() => {
    //imituojame galima klaida
    let error = false;
    if (error === false) {
      let price = 999;
      // console.log("Pirkimas sekmingas");
      resolve(price);
    } else {
      // console.warn("nepavyko, ivyko klaida");
      reject("bankas atmete operacija");
    }
  }, 2000);
});
console.log("pirkimoPazadas ===", pirkimoPazadas);
//darbas su promiso reiksmem vyksta su .then .catch .finally

pirkimoPazadas
  .then((price) => {
    console.log("pirkimas sekmingas, kaina", price);
    return price.toFixed(2);
  })
  .then((antrasThen) => {
    throw new Error("klaida antrame then");
    console.log("then ===", antrasThen);
  })
  .catch((errorMsg) => {
    console.warn(errorMsg);
  });
