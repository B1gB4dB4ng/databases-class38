import mysql from "mysql";
import {
  alterAuthors,
  createAuthorsTable,
  createAuthors_Papers,
  createMentorsTable,
  createPaperTable,
} from "./createTable.js";
import { printAuthorMentor, printAuthorPaper } from "./ex3.js";
import {
  averageH_index,
  minMaxH,
  papersByFemale,
  researchpaperwithAuthor,
  sumPapers,
} from "./ex4.js";
import {
  authorResearchPaperData,
  authorsData,
  mentorData,
  researchPaperData,
} from "./insert.js";
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});
connection.connect();
connection.query("DROP DATABASE researchDB", (err, result) => {
  if (err) {
    throw err;
  }
  console.log("Dropped the database");
});

connection.query("CREATE DATABASE IF NOT EXISTS researchDB", (err, result) => {
  if (err) {
    throw err;
  }

  console.log("Database is created");
});
connection.query("USE researchDB");

runQuery(createAuthorsTable);
runQuery(createMentorsTable);
runQuery(alterAuthors);
runQuery(createPaperTable);
runQuery(createAuthors_Papers);
runQuery(mentorData);
runQuery(researchPaperData);
runQuery(authorsData);
runQuery(authorResearchPaperData);
runQuery(printAuthorMentor);
runQuery(printAuthorPaper);
runQuery(researchpaperwithAuthor);
runQuery(papersByFemale);
runQuery(averageH_index);
runQuery(sumPapers);
runQuery(minMaxH);

function runQuery(queriesArray) {
  queriesArray.forEach((queryElement) => {
    connection.query(queryElement, function (error, results) {
      if (error) {
        throw error;
      } else {
        console.table(results);
      }
    });
  });
}
connection.end();
