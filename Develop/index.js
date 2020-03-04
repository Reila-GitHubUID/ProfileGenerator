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

////////////////////
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github user name?",
      name: "username"
    },
    {
      type: "rawlist",
      message: "What is your favorite color?", 
      choices: ["Green", "Blue", "Pink", "Red"],
      name: "faveColor"
    }
  ])
  .then(function(response) {

    console.log(response);

    // Check the favorite color
    var generateHTML = require("./generateHTML.js");
    console.log("My fave color is " + response.faveColor);
    generateHTML.generateHTML(response.faveColor);
  });