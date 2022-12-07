// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project?',
            name: 'desc'
        },
        {
            type: 'input',
            message: 'Please give any special instructions to install your project.',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'What special usage instructions would you like to include?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What special test instructions would you like to include?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Who collaborated with you on this project?',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'What license would you like to include?',
            name: 'license',
            choices: ['GNU GPLv3 - ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg) - https://www.gnu.org/licenses/gpl-3.0',
                'MIT - ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) - https://opensource.org/licenses/MIT',
                'None']
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHub',
        }

    ])

    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log("Successfully created README.md")
        );
    });