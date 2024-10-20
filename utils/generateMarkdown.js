// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
 if (data.license === MIT) {
    return '![MIT](./images/MIT.jpg)'
 } else if (data.license === Apache) {
    return '![Apache](./images/apache.jpg)'
 } else if (data.license === GPL) {
    return '![GPL](./images/GPL.jpg)'
 } else if (data.license === Mozilla) {
    return '![Mozilla](./images/MIT.jpg)'
 } else if (data.license === Other) {
    '';
 }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

1. [Installation](#installation)  

2. [Usage](#usage)  

3. [Contributing](#contributing)  

4. [Tests](#tests)  

5. [Questions](#questions)  

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To test the application, run ${data.test}

## Questions
If you have any questions, you can reach out to me at ${data.email} or find me on GitHub as ${data.github}.
`;
}

export default generateMarkdown;
