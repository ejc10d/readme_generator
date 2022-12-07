// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./generateMarkdown');


// // TODO: Create an array of questions for user input
// const questions =[
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?',
//     },
//     {
//         type: 'input',
//         message: 'Please provide a brief description of your project?',
//         name: 'desc'
//     },
//     {
//         type: 'input',
//         message: 'Please give any special instructions to install your project.',
//         name: 'instructions',
//     },
//     {
//         type: 'input',
//         message: 'Who collaborated with you on this project?',
//         name: 'credits',
//     },
//     {
//         type: 'input',
//         message: 'What is your email address for people who would like to contribute to this project?',
//         name: 'contribute',
//     },
//     {
//         type: 'input',
//         message: 'What license would you like to include?',
//         name: 'license',
//     }
// ]

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     // const fileName = 'README.md';
//     fs.writeFile(fileName, generateMarkdown(data), (err) =>
//         err ? console.log(err) : console.log('Successfully created README.md!')
//     );
// }

// // TODO: Create a function to initialize app
// function init() { 
//     inquirer
//     .prompt(questions)
//     writeToFile
//     };


// // Function call to initialize app
// init();
