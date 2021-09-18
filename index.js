// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'Enter link to deployed site (optional)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'toc',
            message: 'Please enter a table of contents (optional)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installation (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter credits (optional)',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Enter license (optional)',
            choices: ['Community', 'MIT', 'GNU']
        }
    ])
};

async function init() {
    try {
        const answers = await questions();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();

module.exports = { questions: questions }
