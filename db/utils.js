const connection = require("../config/connection");
const cTable = require("console.table");

class dbQuery {
  constructor(connection) {
    this.connection = connection;
  }

  viewEmployees() {
    return this.connection.promise().query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department,
       role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee 
       LEFT JOIN role on employee.role_id = role.id 
       LEFT JOIN department on role.department_id = department.id 
       LEFT JOIN employee manager on manager.id = employee.manager_id;
            `
    );
  }

  viewRoles() {
    return this.connection.promise().query(
      `SELECT role.id, role.title, role.salary, department.name FROM role
                LEFT JOIN department ON role.department_id = department.id `
    );
  }

  viewDepartments() {
    return this.connection.promise().query(
      `SELECT department.id, department.name FROM department`
    );
  }

  addEmployee(employee) {
    return this.connection.query(`INSERT INTO employee SET ?`, employee);
  }

  addRole(role) {
    return this.connection.query(`INSERT INTO role SET ?`, role);
  }

  addDepartment(department) {
    return this.connection.query(`INSERT INTO department SET ?`, department);
  }

  updateEmployee(employeeId, roleId) {
    return this.connection.query(
      `UPDATE employee SET role_id = ${roleId}
                WHERE id = ${employeeId}`
    );
  }

  deleteEmployee(employeeId) {
    return this.connection.query(
      `DELETE FROM employee
                WHERE id = ${employeeId}`
    );
  }

  deleteRole(rolesId) {
    return this.connection.query(
      `DELETE FROM role
                WHERE id = ${rolesId}`
    );
  }

  deleteDepartment(departmentId) {
    return this.connection.query(
      `DELETE FROM department
                    WHERE id = ${departmentId}`
    );
  }

  quit() {
    connection.end();
  }
}

module.exports = new dbQuery(connection);

//
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
