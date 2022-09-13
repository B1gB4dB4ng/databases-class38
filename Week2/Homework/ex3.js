export const printAuthorMentor = [
  `SELECT a.author_name as Author, m.author_name AS mentor 
  FROM authors a
  JOIN authors m
  ON m.author_no = a.mentor_id;`,
];

export const printAuthorPaper = [
  `SELECT a.* , rp.paper_title FROM authors_research_papers
            RIGHT JOIN authors a 
              USING(author_no)
            LEFT JOIN research_Papers rp
              USING(paper_id);`,
];
