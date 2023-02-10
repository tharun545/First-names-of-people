// Write a JS function in `index.js` with
// function name `getPeopleInCity` that accepts people names list and returns an
// array of containing the first names of the people

const names = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return getFirstNames(names);
};

// console.log(getPeopleInCity(names));

module.exports = getPeopleInCity;
