console.log("What is your Github user name?");
const githubUID = process.argv[2];

console.log("What is your favorite color?");
const faveColor = ;

const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();

///////////////////////
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    // read from files
    const cat = await readFileAsync('cat.json', 'utf8'); // read cat.json
    const dog = await readFileAsync('dog.json', 'utf8'); // read dog.json
    const goldfish = await readFileAsync('goldfish.json', 'utf8'); // read goldfish.json
    const hamster = await readFileAsync('hamster.json', 'utf8'); // read hamster.json

    const animals = [JSON.parse(cat), JSON.parse(dog), JSON.parse(goldfish), JSON.parse(hamster)];
    console.log("Animals: " + animals);

    // write to animals.json
    await writeFileAsync("animals.json", JSON.stringify(animals, null, 2))
      .then(function() {
        console.log("Successfully wrote to animals.json file");
      });

  } catch(err) {
    console.log("error message: " + err);
  }
}

combineAnimals();
