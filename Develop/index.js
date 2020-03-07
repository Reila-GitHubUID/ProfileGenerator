//*************************************//
//***         Declarations          ***//
//*************************************//

// the user prompt declarations
const inquirer = require("inquirer");
const axios = require("axios");

const result = {};

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
  .then(function({username, faveColor}) {
    const url = `https://api.github.com/users/${username}`;
    console.log("url = " + url);
    console.log("color = " + faveColor);
    getGitHubData(url);
    
    // writeToFile ("EllinGithubProfile.pdf", userInput);
  });


  function getGitHubData(url) {
    axios
      .get(url)
      .then(function(res) {
        console.log("****************");
        console.log(res);

        // result = {
        //   name: res.name,
        //   pic: res.avatar_url,
        //   location: res.location,
        //   bio: res.bio,
        //   publicRepos: res.public_repos,
        //   stars: res. ,
        //   followers: res.followers,
        //   following: res.following
        // };
      })
      .catch (e => {
        console.log("ERROR!!!");
      });


  }


// function writeToFile(fileName, data) {
//     try {
//         var generateHTML = require("./generateHTML.js");
//         generateHTML.generateHTML(data);
//     } catch (err) {
//         console.log(err);
//     }
// }


