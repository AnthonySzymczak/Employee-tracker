const {prompt} = require('inquirer');
const db = require('./config')
const consoleTable = require('console.table');





init();
function init() {
    inquirer.prompt({
            type: "list",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Role",
                "Delete Employee",
                "Delete Role",
                "Delete Department",
                "Quit"
            ],
            message: "What would you like to do?",
            name: "selection"
        })
        .then((answer) => {
            
            switch (answer.selection) {

                case "View Employees":
                    viewAllEmployees();
                    break;

                case "View Roles":
                    viewAllRoles();
                    break;

                case "View Departments":
                    viewAllDepartments();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;

                case "Delete Employee":
                    deleteEmployee();
                    break;

                case "Delete Role":
                    deleteRole();
                    break;

                case "Delete Department":
                    deleteDepartment();
                    break;

                case "Quit":
                    quit();
            }
        });
}





















/*
..Query example..
---------- Query database---------
let deletedRow = 2;

db.query(`DELETE FROM books WHERE id = ?`,deletedRow, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

----- Query database --------
db.query('SELECT * FROM books', function (err, results) {
  console.log(results);
});

-------- Default response for any other request (Not Found)-----------
app.use((req, res) => {
  res.status(404).end();
});

*/

