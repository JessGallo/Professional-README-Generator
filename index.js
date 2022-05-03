const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
            name: 'contribution',
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
            name: 'test',
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
            type: 'list',
            name: 'license',
            message: 'Select the license you would like to add:',
            choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
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
        }
    ]

    )
};

async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generatePage(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('File created!');
    }   catch(err) {
        console.log(err);
    }
};

init();
