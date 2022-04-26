// TODO: Include packages needed for this application
// using npm - node package manager
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github username?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please provide your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide your project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide guideliens for the installation of your application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please provide you which license you will be using?',
        choices: ['MIT', 'APACHE', 'None']
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide how you would test your app?',
    },


]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // using the npm package fs then using 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile('NewREADME.md', generateMarkdown({...response}))
    });
}

init();