// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const data = generateMarkdown(data)
//     fs.writeFile('README.md', process.argv[2], (err) =>
//         err ? console.error(err) : console.log('Success!')
//       );
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const ReadMeContent = generateMarkdown(answers);

    fs.writeFile('README.md', ReadMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created READme.md!')
    );
  });

};

// Function call to initialize app
init();
