"use strict";
console.log("gitHubTask.js file was loaded");

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

// 1. Parašykite funkciją, kuri atspausdina visus žmones eilutėmis
function spausdintiZmones(people) {
  console.log(...people);
}
spausdintiZmones(people);

// 2. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes, atskirtus brūkšneliu, pvz.: Serbentautas-Bordiūras

function gautiVardusIrPavardes(people) {
  return people.map(({ name, surname }) => `${name}-${surname}`);
}

// 3. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes bei santuokos statusą, tokiu būdu Jonas Bikas: Vedęs Jonas Bikas: Nevedęs Samantas Kultaitytė: Ištekėjusi Samantas Kultaitytė: Neištekėjusi

function gautiVardusPavardesIrSantuokosStatusa(people) {
  return people.map(({ name, surname, married }) => {
    const santuokosStatusas = married ? "Vedęs" : "Nevedęs";
    return `${name} ${surname}: ${santuokosStatusas}`;
  });
}

// 4. Parašykite funkcijas pagal 2 ir 3 užduotį, kurios vietoj to kad spausdintų, rezultatus grąžintų. Tuomet rezultatai būtų atspausdinti naudojant funkciją aprašytą pirmu punktu.

function atspausdintiRezultatus(rezultatai) {
  console.log(rezultatai.join(", "));
}

const vardaiIrPavardes = gautiVardusIrPavardes(people);
const zmonesIrSantuoka = gautiVardusPavardesIrSantuokosStatusa(people);

atspausdintiRezultatus(vardaiIrPavardes);
atspausdintiRezultatus(zmonesIrSantuoka);

// 5. Sukurkite kaitos funkciją, kuri grąžintų objektą su lytimi ir uždirbamu pinigų kiekiu

function lytisPinigai(people) {
  return people.map(({ sex, income }) => ({
    lytis: sex,
    udirbamiPinigai: income,
  }));
}

const zmogusObjektas = lytisPinigai(people);
console.log(zmogusObjektas);

// 6. Sukurkite funkciją, kuri grąžintų objektą su vardu, pavarde ir lytimi. Tuomet panaudoje ją, grazinkite masyvą,

function gautiZmoguLyti(people) {
  return people.map(({ name, surname, sex }) => ({
    vardas: name,
    pavarde: surname,
    lytis: sex,
  }));
}

const zmogusObj = gautiZmoguLyti(people);
console.log(zmogusObj);
