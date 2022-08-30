//Exercise-1

export const createAuthorsTable = [
  `CREATE TABLE IF NOT EXISTS authors (
author_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
author_name VARCHAR (50) NOT NULL,
university VARCHAR (150),
date_of_birth DATE,
h_index INT,
gender ENUM('M','F')
);`,
];

export const alterAuthors = [
  `alter table authors
add column mentor_id INT, 
ADD CONSTRAINT FK_mentor FOREIGN KEY(mentor_id) REFERENCES mentors(id);`,
];

export const createMentorsTable = [
  `CREATE TABLE IF NOT EXISTS mentors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL);`,
];

//Exercise-2
export const createPaperTable = [
  `CREATE TABLE IF NOT EXISTS research_Papers (
        paper_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        paper_title TEXT,
        conference TEXT,
        publish_date DATE
        );`,
];

export const createAuthors_Papers = [
  `CREATE TABLE IF NOT EXISTS authors_research_papers (
    id int not NULL PRIMARY KEY AUTO_INCREMENT,
    author_no int not null,
    paper_id int not null,
    FOREIGN KEY (author_no) REFERENCES authors (author_no),
    FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id)
   );
`,
];
