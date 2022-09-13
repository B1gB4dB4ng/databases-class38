//Exercise-1

export const createAuthorsTable = [
  `CREATE TABLE IF NOT EXISTS authors (
    author_no INT  PRIMARY KEY,
    author_name VARCHAR (50) NOT NULL,
    university VARCHAR (150),
    date_of_birth DATE,
    h_index INT,
    gender ENUM('M','F')
    );`,
];

export const alterAuthors = [
  `ALTER TABLE authors
  ADD COLUMN mentor_id INT, 
  ADD CONSTRAINT FOREIGN KEY(mentor_id) REFERENCES authors(author_no);`,
];

//Exercise-2
export const createPaperTable = [
  "SET FOREIGN_KEY_CHECKS=0;",
  `CREATE TABLE IF NOT EXISTS research_Papers (
        paper_id INT   PRIMARY KEY,
        paper_title VARCHAR(255),
        conference VARCHAR(255),
        publish_date DATE
        );`,
];

export const createAuthors_Papers = [
  `CREATE TABLE IF NOT EXISTS authors_research_papers (
    id int AUTO_INCREMENT PRIMARY KEY ,
    author_no INT ,
    paper_id INT ,
    FOREIGN KEY (author_no) REFERENCES authors (author_no),
    FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id)
   );
`,
];
