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
        message: 'Who collaborated with you on this project?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What license would you like to include?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your email address for people who would like to contribute to this project?',
        name: 'contribute',
    }
])

.then((data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log("Successfully created README.md")
    );
});