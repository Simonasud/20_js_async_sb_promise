"use strict";
console.log("pazadas.js file was loaded");

// 1. Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.
// 2. Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

let pazadas = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // 4/5 tikimybė resolve
    if (Math.random() < 0.8) {
      resolve();
    } else {
      // 1/5 tikimybė reject
      reject();
    }
  }, 5000);
});

pazadas
  .then(() => {
    console.log("this is a message");
    return "yes, veikia"; // į return pridedame žinutę, kurią norime perduoti kitam then()
  })
  .then((message) => {
    alert(message); // gauname žinutę iš pirmo then() ir alertiname ją
  })
  .catch(() => {
    alert("no, nepavyko");
  });

// 3. Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.
