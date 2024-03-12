/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */


england = unitedKingdom.filter((element) => element.name == "England")[0];
england.touristAttractions = ["Big Ben", "Buckingham Palace"];
console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom.filter((element) => element.name == "Wales")[0];
wales.capital = "Cardiff";
console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */
northernIreland = unitedKingdom.filter((element) => element.name == "Northern Ireland")[0];
northernIrelandKeys = Object.keys(northernIreland);
console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the population of Wales, and say which is bigger.
 */
scotland = unitedKingdom.filter((element) => element.name == "Scotland")[0];
if (scotland.population > wales.population) {
  console.log(scotland.name + " has bigger populations");
} else {
  console.log(wales.name + " has bigger popultation");
}