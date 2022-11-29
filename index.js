const inquirer = require('inquirer');
const fs = require('fs');

let = generateReadMeFile = (data) => 


inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      message: 'Please provide a brief description of your project?',
      name: 'desc'
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = 'README.txt';

    fs.writeFile(filename, generateReadMeFile(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
