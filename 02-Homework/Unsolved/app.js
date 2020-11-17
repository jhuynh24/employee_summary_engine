const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What employee would you like to create?",
        choices: ["add manager", "add engineer", "add intern", "build team"]
    }).then(answers => {
        if (answers.menu === "add manager") {
            //callback addManager function
            addManager();
        }
        else if (answers.menu === "add engineer") {
            //callback addEngineer function
        }
        else if (answers.menu === "add intern") {
            //callback addIntern function
        }
        else {
            //callback createTeam
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.officeNumber);
        employees.push(manager);
        mainMenu();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeId, github);
        employees.push(engineer);
        mainMenu();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school did you attend?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
        employees.push(intern);
        mainMenu();
    })
}







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

mainMenu();