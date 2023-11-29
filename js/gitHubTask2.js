"use strict";
console.log("gitHubTask2.js file was loaded");

const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
console.log("=================================");

// 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.

const visiVyrai = people.forEach((person) => {
  if (person.sex === "male") {
    console.log(`${person.name} ${person.surname}`);
  }
});
console.log("=================================");

//2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.

const visosJaunosMoterys = people.forEach((person) => {
  if (person.sex !== "male" && person.age < "35") {
    console.log(`${person.name} ${person.surname}`);
  }
});
console.log("=================================");

// 3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

const turiMasina = people.forEach((person) => {
  if (person.hasCar === true) {
    console.log(`${person.name} ${person.surname}`);
  }
});
console.log("=================================");

// 4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.

const susituoke = people.forEach((person) => {
  if (person.married === true) {
    console.log(`${person.name} ${person.surname}`);
  }
});
console.log("=================================");

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių amziu.

const vairuotojuAmzius = people.forEach((person) => {
  if (person.hasCar === true) {
    console.log(`${person.age}`);
  }
});

console.log("=================================");

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius, suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

let vairuojanciosMoterys = 0;
let vairuojantysVyrai = 0;

people.forEach((person) => {
  if (person.hasCar && person.sex === "female") {
    console.log(`${person.name} ${person.surname} - vairuojanti moteris`);
    vairuojanciosMoterys++;
  } else if (person.hasCar && person.sex !== "female") {
    console.log(`${person.name} ${person.surname} - vairuojantis vyras`);
    vairuojantysVyrai++;
  }
});

console.log(`Vairuojančių moterų kiekis: ${vairuojanciosMoterys}`);
console.log(`Vairuojančių vyrų kiekis: ${vairuojantysVyrai}`);

console.log("=================================");

// 7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income

const naujasMasyvas = people.map(({ sex, income }) => ({ sex, income }));

console.log(naujasMasyvas);

// 8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'

const naujasMasyvas2 = people.map((person) => {
  const { income, ...kitosSavybes } = person;
  return { ...kitosSavybes, salary: person.income };
});

console.log(naujasMasyvas2);

// 9. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardės

const pasalintiLytiVardaPavarde = people.map(
  ({ sex, name, surname, ...kitosSavybes }) => ({
    ...kitosSavybes,
    age: kitosSavybes.age,
    income: kitosSavybes.income,
    married: kitosSavybes.married,
    hasCar: kitosSavybes.hasCar,
  })
);

console.log("pasalintiLytiVardaPavarde ===", pasalintiLytiVardaPavarde);

// 10. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyvą kur savybės name ir surname būtų pakeistos viena savybe - fullname

const sukurtaSavybeFullname = people.map(
  ({ name, surname, ...kitosSavybes }) => ({
    fullname: `${name} ${surname}`,
  })
);

sukurtaSavybeFullname.forEach((person) => {
  console.log(person.fullname);
});
