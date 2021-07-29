const {prompt} = require('inquirer');
const db = require('./config')
const consoleTable = require('console.table');




























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

