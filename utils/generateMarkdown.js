const questions = require('../index.js');
const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
const Community = '**This repo is open-source and free for you to make your own changes!**'
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `
  # ${questions.name}

  ## Made by 
  ${questions.github}

  ## Deployed Site
  Link to deployed site can be found [here](${questions.deployed})

  ## Description
  ${questions.description}

  ## Table of Contents
  - [Deployed Site] (#deployed site)
  - [Description] (#description)
  - [Installation] (#installation)
  - [Credits] (#credits)
  - [License] (#license)

  ## Installation
  ${questions.installation}

  ## Credits
  [${questions.github}](github.com/${questions.github})
  ${questions.credits}

  ## License
  ![badge](https://img.shields.io/badge/license-${questions.license}-brightgreen)
  <br>
  This repo is covered by the ${questions.license} license.
`;
}

module.exports = generateMarkdown;
