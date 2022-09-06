import mysql from "mysql";
const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

function getPopulation(Country, name, code, cb) {
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name =${name} and code = ${code}`,

    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not Found"));
      cb(null, result);
    }
  );
}

conn.connect();

getPopulation("country", `'Netherlands' or 1=1`, `'NLD' or 1=1`, console.log);
conn.end();

/*


function getPopulation(Country, name, code, cb) {
  `SELECT Population FROM ${Country} WHERE Name= ? and code= ?`,
    [name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not Found"));
      cb(null, result);
    };
}


*/
