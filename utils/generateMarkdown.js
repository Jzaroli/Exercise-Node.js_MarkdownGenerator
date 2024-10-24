// Function that returns a license badge based on which license is passed. If there is no license, it returns an empty string.
function renderLicenseBadge(data) {
 if (data.license === 'MIT') {
    return '![MIT](./assets/images/mit.jpg)'
 } else if (data.license === 'Apache') {
    return '![Apache](./assets/images/apache.jpg)'
 } else if (data.license === 'GPL') {
    return '![GPL](./assets/images/gpl.jpg)'
 } else if (data.license === 'Mozilla') {
    return '![Mozilla](./assets/images/mozilla.jpg)'
 } else if (data.license === 'Other') {
    ''
 }
};

// Function that returns the license link. If there is no license, it returns an empty string.
function renderLicenseLink(data) {
   if (data.license === 'MIT') {
      return '[MIT License Information](https://en.wikipedia.org/wiki/MIT_License)'
   } else if (data.license === 'Apache') {
      return '[Apache License Information](https://www.apache.org/licenses/LICENSE-2.0)'
   } else if (data.license === 'GPL') {
      return '[GPL License Information](https://www.gnu.org/licenses/gpl-3.0.en.html)'
   } else if (data.license === 'Mozilla') {
      return '[Mozilla License Information](https://www.mozilla.org/en-US/MPL/)'
   } else if (data.license === 'Other') {
      ''
   }
};

// Function that returns the license section of README. If there is no license, it returns an empty string.
function renderLicenseSection(data) {
   if (data.license === 'MIT' || data.license === 'Apache' || data.license === 'GPL' || data.license === 'Mozilla') {
      return '## License'
   } else if (data.license === 'Other') {
      ''
   }
};

// Function that includes a link to the license section based on which.
function renderLicenseTableofContents(data) {
   if (data.license === 'MIT' || data.license === 'Apache' || data.license === 'GPL' || data.license === 'Mozilla') {
      return '6. [License](#license)'
   } else if (data.license === 'Other') {
      ''
   }
  };

// Function that generates markdown for the README.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data)}

## Description
${data.description}

## Table of Contents

1. [Installation](#installation)  

2. [Usage](#usage)  

3. [Contributing](#contributing)  

4. [Tests](#tests)  

5. [Questions](#questions)  

${renderLicenseTableofContents(data)}  

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

${renderLicenseSection(data)}
${renderLicenseLink(data)}
`
}

//Exports the function for use in the index.js
export default generateMarkdown;