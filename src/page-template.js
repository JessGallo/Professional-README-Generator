function generatePage(answers) {
    return `
# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Description
${answers.description}

## Table of Content
-[Description](#description) 
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contribution](#contribution)
-[Tests](#tests)
-[Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
This application is covered by the ${answers.license} license.

## Contribution
${answers.contribution}

## Tests
${answers.test}

## Questions
This is my GitHub: [${answers.username}](https://github.com/${answers.username})
For further questions, email me at ${answers.email}.
    `;
};

module.exports = generatePage;