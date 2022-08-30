export const researchpaperwithAuthor = [
  ` SELECT rp.paper_title, COUNT(a.author_no) AS count_of_authors 
FROM authors_research_papers arp
JOIN authors a 
    USING(author_no)
JOIN research_Papers rp
    USING(paper_id)
GROUP BY paper_title`,
];

export const papersByFemale = [
  `SELECT  COUNT(rp.paper_title) AS papers_published_by_females 
    FROM authors_research_papers
    JOIN authors a
        USING(author_no)
    JOIN research_papers rp
        USING(paper_id)
    GROUP BY  gender
    HAVING gender = "F";`,
];
export const averageH_index = [
  `SELECT university, AVG(h_index) AS average_of_indexes FROM authors
GROUP BY university;`,
];
export const sumPapers = [
  `SELECT a.university, COUNT(rp.paper_title) AS count_of_papers
            FROM authors_research_papers
            JOIN authors a
                USING(author_no)
            JOIN research_papers rp
                USING(paper_id)
            GROUP BY university;`,
];

export const minMaxH = [
  `SELECT university, MIN(h_index), MAX(h_index) FROM authors
            GROUP BY university;`,
];
