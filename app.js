const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
const idArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function makeTeamApp() {

  function makeManager() {
    console.log("Let's make your team!");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID number?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
      }
    ]).then((answer) => {
      console.log(answer);
      const newManager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.managerOfficeNumber
      );
        employees.push(newManager);
        makeTeam();
    });
  }    

  function makeTeam() {
    inquirer.prompt([
      {
        type: "list",
        name: "newEmployeeQuery",
        message: "What type of team member do you wish to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't wish to add more team members"
        ]
      }
    ]).then(choice => {
      switch(choice.newEmployeeQuery) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;          
        default:
          writeTeam();
      }
    })
  }  



  function promptEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github username?",
      }
    ]).then(answer => {
      console.log(answer);
      const newEngineer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGithub
      );
      employees.push(newEngineer);
      makeTeam();
    });
  }  

  function promptIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID number?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What what school did the the intern attend?",
      }
    ]).then(answer => {
      console.log(answer);
      const newIntern = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool
      );
      employees.push(newIntern);
      makeTeam();
    });
  }  
  
  function writeTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
  }  

  makeManager();

}

makeTeamApp();

