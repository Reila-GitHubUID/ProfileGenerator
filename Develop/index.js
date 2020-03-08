//*************************************//
//***         Declarations          ***//
//*************************************//

// the user prompt declarations
const inquirer = require("inquirer");
const axios = require("axios");

let result = {};

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

    result = {
        color: faveColor, 
        githubUID: username
    }
    getGitHubData(url);    
  });


function getGitHubData(url) {
  axios
    .get(url)
    .then(function (res) {

      result = {
        ...result,
        name: res.data.name,
        pic: res.data.avatar_url,
        location: res.data.location,
        githubURL: res.data.html_url,
        bio: res.data.bio,
        publicRepos: res.data.public_repos,
        followers: res.data.followers,
        following: res.data.following
      };

      let starredURL = res.data.starred_url;
      starredURL = starredURL.substr(0, starredURL.indexOf('{'));

      axios
        .get(starredURL)
        .then(function (r) {
          result = { ...result, githubStars: r.data.length };

          console.log("%%%%%%%%%%%%");
          console.log(result);
          console.log(`${result.githubUID}.pdf`);
          console.log(`_${result.name}.pdf`);

          console.log("//**************************/");
          try {
            var generateHTML = require("./generateHTML.js");
            writeFileAsync(`${result.githubUID}.html`, generateHTML.generateHTML(result))
            .then(function() {
              console.log(`Successfully created ${result.githubUID}.html file`);
            });
          } 
          catch (err) {
            console.log("generateHTML Error: " + err);
          }
          console.log("//**************************/");


        })
        .catch(e => {
          console.log("ERROR2!!!" + e);
        });
    })
    .catch(e => {
      console.log("ERROR!!!" + e);
    });
}