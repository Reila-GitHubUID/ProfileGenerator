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
        // console.log(res);
        //console.log(res.data.name);

       result = {
          name:  res.data.name,
          pic: res.data.avatar_url,
          location: res.data.location,
          bio: res.data.bio,
          publicRepos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following
        };

        let starredURL = res.data.starred_url;
        console.log("OLD starredURL ======== " + starredURL);
        starredURL = starredURL.substr(0, starredURL.indexOf('{'));
        console.log("NEW starredURL ======== " + starredURL);

        axios
          .get(starredURL)
          .then (function(r) {
            console.log("##########");
            result = {...result, githubStars: r.data.length};
            console.log("the length is ====== " + r.data.length);

          })
          .catch (e => {
            console.log("ERROR2!!!")
          });
      })
      .catch (e => {
        console.log("ERROR!!!" + e);
      });

  }

 
            
  console.log("%%%%%%%%%%%%");
  console.log(result); 


// function writeToFile(fileName, data) {
//     try {
//         var generateHTML = require("./generateHTML.js");
//         generateHTML.generateHTML(data);
//     } catch (err) {
//         console.log(err);
//     }
// }


