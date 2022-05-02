// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to provide installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to enter usage information.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Provide contribution guidelines. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to provide contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Provide test instructions. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to provide test instructions.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license you would like to add.',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }else {
                console.log('You need to enter your email address!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
