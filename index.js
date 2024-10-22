// Packages needed for this application:
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Array of questions for user input:
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are your project's installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project's usage information?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How would a user contribute to your project? if applicable.",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to test the application?",
    },
    {
        type: "list",
        message: "Which license will you be using?",
        name: "license",
        choices: ['MIT', 'Apache', 'GPL', 'Mozilla', 'Other'],
    },
    {
        type: "input",
        name: "email",
        message: "What's your email address so people can reach out to you?",
    },
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username so people can see your work?",
    },
];

// Function to write README file:
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created READme.md!')
      );
}

// Function to initialize app:
function init() {
    inquirer.prompt(questions).then((answers) => {
    const readMeContent = generateMarkdown(answers);
    writeToFile('README.md', readMeContent);
  });
};

// Function call to initialize app:
init();
