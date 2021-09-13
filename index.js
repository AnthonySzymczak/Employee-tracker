const {prompt} = require('inquirer');
const db = require('./config/connection')
const cTable = require('console.table');
const dbQuery = require('./db/utils');

// "Main Menu" selections
init();
function init() {
 
    prompt({
            type: "list",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Employee Role",
                "Delete Employee",
                "Delete Role",
                "Delete Department",
                "Quit"
            ],
            message: "What would you like to do?",
            name: "selection"
        })
        // Switch cases to respond with proper selections
        .then((answer) => {
            switch (answer.selection) {

                case "View Employees":
                    viewEmployees();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "View Departments":
                    viewDepartments();
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
                    break;
            }
        });
};

function viewEmployees() {
dbQuery.viewEmployees()
    .then(([rows]) => {
    console.table(rows)
    
    }).then(() => init()) 
    .catch((err) =>{
        console.log(err)
    })   
}
function viewRoles() {
    dbQuery.viewRoles()
        .then(([rows]) => {
        console.table(rows)
        
        }).then(() => init()) 
        .catch((err) =>{
            console.log(err)
        })   
    }
    function viewDepartments() {
        dbQuery.viewDepartments()
            .then(([rows]) => {
            console.table(rows)
            
            }).then(() => init()) 
            .catch((err) =>{
                console.log(err)
            })   
        }