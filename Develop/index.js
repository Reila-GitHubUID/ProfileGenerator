//*************************//
//***** Declarations ******//
//*************************//

// the user prompt declarations
let userInput;
var inquirer = require("inquirer");

// the github api declarations
var repositories;
var repouri;

// the read and write to files declarations
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//*************************//
//******* Main code *******//
//*************************//

// prompting users with questions of his/her Github uid, and his/her favorite color
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
    // console.log(response);
    uid = response.username;

    repouri = 'https://api.github.com/users/'+uid;
    console.log("repouri = " + repouri);

    userInput = {
        uid: uid,
        color: response.faveColor

    // writeToFile ("EllinGithubProfile.pdf", userInput);
    };
  });


// retrieving this user's information from Github API
$.getJSON(repouri, function(json){
    repositories = json;   
    writeToFile(uid + ".pdf", userInput);                
});


function writeToFile(fileName, data) {
    try {
        var generateHTML = require("./generateHTML.js");
        generateHTML.generateHTML(data);
    } catch (err) {
        console.log(err);
    }
}


