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
            message: "Enter your name as the manager of this team:"
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name:  "officeNumber",
            message: "What is your office number?"
        },
        {
            type: "confirm",
            name: "employeeNum",
            message: "Do you want to add an employee?"  
        }
]).then(data => {
    console.log(data);
    if (data.employeeNum === true) {
        console.log("Adding a new employee!")
        this.promptRole();
    }else {
        this.quit();
        console.log("Thank you. No more employees to add.")
    }

});
}
promptUser(); {

    promptRole(); {
        return inquirer.prompt([
            {
                type: "checkbox",
                name: "empRole",
                message: "What is the employee's role?",
                choices: ["Engineer", "Intern"]
            }
        ]).then(val => {
            if (val.choice === "Engineer") {
                this.promptEngineer();
            } else {
                this.promptIntern();
            }
        });
    }
}

promptEngineer(); {
    inquirer
    .prompt([
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
        }
    ]);
}

promptIntern(); {
    inquirer
    .prompt([
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
}
    //loops through the number of employees the manager has
// const numberEmployees = data.employeeNum
//     for (var i = 0; i < numberEmployees.length; i++); {
//     console.log(`${numberEmployees[i]}`);
// }

/*
//if Engineer then ask these questions, if Intern ask these
const roleQuestions = JSON.parse(data);

roleQuestions.forEach(function(role) {
    if (role.choices === "Engineer") {
      dogs.push(animal);
    } else if (role.choices === "Intern") {
      cats.push(animal);
    }
  });

  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

//function generateHTML(answers) {
//    return `
//    copy in html from other pages???? and enter ${valuepaths????}`;
//}

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
*/