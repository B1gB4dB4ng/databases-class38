import { execQuery } from "./transactions.js";

export const insertValueQueries = [
  `INSERT INTO account (account_number,balance) VALUES 
        (101,3000),
        (102,4000),
        (103,8000);
    `,
  `INSERT INTO account_changes (account_number,amount,remark) VALUES
    (101,500,'Rent'),
    (102,1000,'Payment for loan'),
    (103,2000,'Payment for X');
    `,
];

export const insertValue = (queries) => {
  queries.forEach(async (query) => {
    await execQuery(query);
  });
};
