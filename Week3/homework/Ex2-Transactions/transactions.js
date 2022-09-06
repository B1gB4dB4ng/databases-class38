import mysql from "mysql";
import util from "util";
import {
  createTables,
  createTablesQueries,
} from "./transactions-create-tables.js";

import {
  insertValue,
  insertValueQueries,
} from "./transactions-insert-values.js";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

export const execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  connection.connect();
  try {
    await execQuery("CREATE DATABASE IF NOT EXISTS BankDB");
    await execQuery("USE BankDB");
    await createTables(createTablesQueries);
    await insertValue(insertValueQueries);

    await execQuery("START TRANSACTION");
    await execQuery(
      "UPDATE account SET balance= balance-1000 WHERE account_number=101;"
    );
    await execQuery(
      `INSERT account_changes (account_number,amount,remark) VALUES (101,1000,'Payment for secondhand monitor');`
    );
    await execQuery(
      "UPDATE account SET balance= balance+1000 WHERE account_number= 102;"
    );
    await execQuery(
      `INSERT INTO account_changes (account_number,amount,remark) VALUES (102,1000,'Payment for secondhand monitor');`
    );
    await execQuery("COMMIT");
  } catch (error) {
    console.error(error);
    await execQuery("ROLLBACK");
    connection.end();
  }
  connection.end();
}

seedDatabase();
