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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function makeTeam() {


  function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your name as the manager of this team:",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      }
    ]).then((answer) => {
      console.log(answer);
      const newManager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
        employees.push(newManager);
        nextEmployee();
    });
  }    

  function nextEmployee() {
    inquirer.prompt([
      {
        type: "list",
        name: "newEmployeeQuery",
        message: "What typye of employee do you want to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't wish to add more employees."
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



  const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is their github username?",
      }
    ]).then(answer => {
      console.log(answer);
      const newEngineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      employees.push(newEngineer);
      nextEmployee();
    });
  }  


  const promptIntern = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What what school did the the intern attend?",
      }
    ]).then(answer => {
      console.log(answer);
      const newIntern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      employees.push(newIntern);
      nextEmployee();
    });
  }  
  
  function writeTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
  }  

  promptUser();

}

makeTeam();

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
// for the provided `render` function to work! ``