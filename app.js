const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
      },
      {
        type: "confirm",
        name: "employeeNum",
        message: "Do you want to add an employee?",
      }
    ]);
}

//Attempt to loop through the number of employees the manager has
// const numberEmployees = data.employeeNum
//     for (var i = 0; i < numberEmployees.length; i++); {
//     console.log(`${numberEmployees[i]}`);
// }

promptUser() 
    .then((data) => {
      console.log(data);
      if (data.employeeNum === true) {
        console.log("Adding a new employee!");
        this.promptRole();
      } else {
        this.quit();
        console.log("Thank you. No more employees to add.");
      }
    });

promptRole()
    .then(function(data) {
        if (data.employeeNum === true) {
            return inquirer.prompt([
                {
                type: "checkbox",
                name: "empRole",
                message: "What is the employee's role?",
                choices: ["Engineer", "Intern"],
                },
            ])
            .then((data) => {
                if (data.empRole === "Engineer") {
                this.promptEngineer();
                } else {
                this.promptIntern();
                }
            });
        }
    });
    promptEngineer() 
        return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
        },
        {
        type: "input",
        name: "id",
        message: "What is their ID number?"
        },
        {
        type: "input",
        name: "email",
        message: "What is their email address?"
        },
        {
        type: "input",
        name: "github",
        message: "What is their github username?"
        }]);

    promptIntern()
        return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
        },
        {
        type: "input",
        name: "id",
        message: "What is their ID number?"
        },
        {
        type: "input",
        name: "email",
        message: "What is their email address?"
        },
        {
        type: "input",
        name: "school",
        message: "What what school did the the intern attend?"
        }
    ]);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function render(data) {
   return `
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">

                        <div class="row">
                            <div class="team-area col-12 d-flex justify-content-center">
                            <div class="card employee-card">
                            <div class="card-header">
                                <h2 class="card-title">${data.name}</h2>
                                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID: ${data.id}</li>
                                    <li class="list-group-item">Email: ${data.email}<a href="mailto:{{ email }}">{{ email }}</a></li>
                                    <li class="list-group-item">Office number: ${data.officeNumber}</li>
                                </ul>
                            </div>
                        </div>`
    if (data.empRole === "Engineer") {
        return 
                `<div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${data.name}</h2>
                            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
                        </div>
                <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: ${data.email}<a href="mailto:{{ email }}">{{ email }}</a></li>
                            <li class="list-group-item">GitHub: ${data.github}<a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
                        </ul>
                    </div>
                </div>`
    }else {
        return 
                `<div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${data.name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: ${data.email}<a href="mailto:{{ email }}">{{ email }}</a></li>
                            <li class="list-group-item">School: ${data.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
   `;
}
}
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//promptUser()
//    .then(function(answers) {
    //     const html = generateHTML(answers);
    //     return render("team.html", html);
    // })
    // .then(function() {
    //     console.log("Succesfully wrote to team.html");
    // })
    // .catch(function(err) {
    //     console.log(err);
    // });

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
