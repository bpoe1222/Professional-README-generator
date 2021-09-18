const questions = require('../index.js');

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `
  # ${questions.name}

  ## Deployed-Site
  Link to deployed site can be found [here](${questions.deployed})

  ## Description
  ${questions.description}

  ## Table of Contents
  - [Deployed Site](#deployed-site)
  - [Description](#description)
  - [Installation](#installation)
  - [Credits](#credits)
  - [License](#license)

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
