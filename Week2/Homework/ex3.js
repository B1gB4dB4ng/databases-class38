export const printAuthorMentor = [
  `SELECT a.author_name, m.name AS mentor 
FROM authors a
LEFT JOIN mentors m
  ON a.mentor_id = m.id;`,
];

export const printAuthorPaper = [
  `SELECT a.* , rp.paper_title FROM authors_research_papers
            RIGHT JOIN authors a 
              USING(author_no)
            LEFT JOIN research_Papers rp
              USING(paper_id);`,
];
