//*************************************//
//***         Declarations          ***//
//*************************************//

// the user prompt declarations
let userInput;
var inquirer = require("inquirer");

// the github api declarations
var repositories;
let uid;
let color;

// the read and write to files declarations
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//*************************************//
//***         Main code             ***//
//*************************************//

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
    uid = response.username;
    color = response.faveColor;
    const url = 'https://api.github.com/users/'+uid;
    console.log("repouri = " + url);
    getGitHubData(url);
    
    // writeToFile ("EllinGithubProfile.pdf", userInput);
  });


  function getGitHubData(url) {
    // retrieving this user's information from Github API
    // $.ajax({
    //     url,
    //     method: "GET"
    // }).then( function(response) {
    //     console.log(response);
    // });

    // $.getJSON(url, function(json){
    //     console.log(json);
    //   });
    var request = new XMLHttpRequest();

    // Initialize a request
    request.open('get', url, true);
    // Send it
    request.send();
    console.log(request.response);
  }


// function writeToFile(fileName, data) {
//     try {
//         var generateHTML = require("./generateHTML.js");
//         generateHTML.generateHTML(data);
//     } catch (err) {
//         console.log(err);
//     }
// }


