const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose from the following licenses?',
    choices: [
      'MIT', 'None',
    ],
  },
  {
    type: "input",
    name: "description",
    message: "Enter a a description of your project",
  },
  {
    type: "input",
    name: "instillation",
    message: "List out the steps required to install your project(using ',,' to enter a new step)",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions on how to use this application(using ',,' to enter a new line)",
  },
  {
    type: "input",
    name: "credits",
    message: "Enter Contributors & third party assets that require attribution (using ',,' to enter a new line)",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter any tests the user can run to make sure the application is working (using ',,' to enter a new test)",
  },
  {
    type: "input",
    name: "name",
    message: "Enter your name",
  },
  // {
  //   type: "editor",
  //   name: "description",
  //   message: "Enter a description of your project",
  // },
  //can add in choices for multi select
];
const questionsTwo = [
  {
    type: "input",
    name: "test",
    message: "What is your project title?",
  },
]
function writeToFile(fileName, data) {

    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');}
        )
}

// function appendToFile(fileName, data) {

//   fs.appendFile(path.join(process.cwd(), fileName), data, (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');}
//       )
// }

async function init() {
  //add a function that runs node index.js which uses enquirer

  await inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
  // await initTwo()
}

// function initTwo() {
//   inquirer.prompt(questionsTwo).then((answersTwo) => {
//     console.log(answersTwo)
//     appendToFile("README.md", generateMarkdown(answersTwo));
//   });
// }
init();

// for contents, repeat question, store with ',' seperators then when writing it into file seperate them first before adding them in with split?