# Developer Profile Generator 

Using Node.js and ES6+, I am creating a program that generates a PDF file based on a user's GitHub uid. This PDF file can be easily used for a project stakeholders.

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

```
ASSUMING the developer has a GitHub profile

WHEN prompted for the developer's GitHub username and favorite color

THEN a PDF profile is generated
```

## Description

This program is a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for a favorite color, which will be used as the background color for cards.

The PDF will be populated with the following:

* Profile image
* GitHub user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

The following is the demonstration of what the program does, and the results it generates.
![Profile Generator](./Assets/Demo-ProfileGenerator.gif)