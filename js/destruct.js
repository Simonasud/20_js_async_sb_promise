"use strict";
console.log("destruct.js file was loaded");

//destruct, spread

function getUser() {
  let mas = ["James", "London"];
  return mas;
}
// const rez = getUser();
// console.log("rez[0]====", rez[0]);
// const username = rez[0]
// const town = rez[1]

// const [username, town, age] = getUser();

// console.log("username ===", username);
// console.log('town ===', town);
// let sent = `MR ${username} is from ${5} and is ${age} year old`;

// console.log("sent ===", sent);

function getPerson() {
  let p1 = {
    name: "Mike",
    town: "Kaunas",
    age: 25,
  };
  return p1;
}

const personObj = getPerson();
console.log("person1 ===", personObj);

// const name = personObj.name
// const town = personObj.town
// const age = personObj.age

const { name, town, age } = personObj;

let sentObj = `MR ${name} is from ${town} and is ${age} year old`;
console.log("sentObj ====", sentObj);

//spread

const nums = [1, 2, 3];
const nums2 = [4, 4, 6, 7];
const max = Math.max(...nums);
console.log("max ===", max);

const sujungtasArr = [0, ...nums, 10, ...nums2, 55];
console.log("sujungtasArr ===", sujungtasArr);

const nums2copy = [...nums2];
console.log("nums2copy ===", nums2copy);

let p5 = {
  name: "Mike",
  town: "Kaunas",
  age: 25,
};

//sukurti nauja objekta su visomis reiksmemis plius has car
let p5Copy = { ...p5, hasCar: true };
// p5Copy.hasCar = true;
console.log("p5Copy ===", p5Copy);
