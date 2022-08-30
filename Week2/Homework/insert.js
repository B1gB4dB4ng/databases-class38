export const mentorData = [
  `INSERT INTO mentors (name)
VALUES ("Jack"), ("Ahmet"),( "Joseph"), ("Victor"), ("Pera");`,
];

export const authorsData = [
  `
INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor_id)  VALUES

("Kenn","Universidad Externado de Colombia","2021/10/06",206,"M",4),
("Brigitta","Green Mountain College","2021/10/26",365,"F",5),
("Orin","University of Mindanao","2022/6/16/",461,"M",1),
("Alisun","Shonan Institute of Technology","2021/10/17",203,"F",2),
("Nesta","Institute of Management and Economy","2022/3/15",150,"F",1),
("Nelie","Kashan University of Medical Sciences","2022/3/10",199,"F",3),
("Melisse","Xijiang University","2022/6/9",120,"F",4),
("Rossie","Indira Gandhi National Open University","2021/9/18/",242,"M",1),
("Dietrich","American University of Middle East","2021/11/27/",303,"M",1),
("Isabella","Selcuk University","2022/3/24",194,"F",4),
("Winonah","Universidade Autónoma de Lisboa Luís de Camoes","2022/8/10",444,"F",3),
("Virgina","Perak Islamic College","2022/4/4",111,"F",2),
("Bennett","Novosibirsk State Agricultural University","2022/5/2",158,"M",2),
("Benedikta","Bayerische Julius-Maximilians-Universität Würzburg","2021/01/3",343,"F",5),
("Franchot","Macon State College","2021/9/16",140,"M",3);

`,
];

export const researchPaperData = [
  `
INSERT INTO research_Papers (paper_title, conference, publish_date) VALUES

('Mathematics','Wolf','2021/5/6'),
('Sociology','Crested porcupine','2021/9/9'),
('Speech','Chicken','2021/5/20/'),
('Trigonometry','Fringe-eared oryx','2022/4/11'),
('Spanish','Goliath heron','2022/7/25'),
('Economics','European wild cat','2022/3/24'),
('German','Ladybug','2020/9/16'),
('Modern Literature','Jabiru stork','2022/7/19'),
('LOGIC','Mouse','2022/2/12'),
('Language Arts','Buttermilk snake','2021/11/6'),
('Music','Komodo dragon','2021/12/6'),
('English IV','Cape wild cat','2021/3/22'),
('History','Collared lemming','2022/7/9'),
('Ancient Civilizations','Dalmatian','2021/4/26'),
('Ancient Civilizations','Eurasian hoopoe','2022/7/13'),
('Leadership','Chestnut weaver','2021/12/26'),
('Language Arts','Blue shark','2021/10/29'),
('Earth Science','Javanese cormorant','2020/12/25'),
('French','Sea Lion','2021/12/13'),
('English IV','Japanese macaque','2021/4/7'),
('Accounting','Glossy ibis','2021/3/30'),
('Trigonometry','American buffalo','2021/6/5'),
('Grammar','Galapagos dove','2021/3/23'),
('Handwriting','Lemur','2021/6/19'),
('Leadership','Wallaby','2020/11/7'),
('Ancient Civilizations','Turkey','2021/11/2'),
('Earth Science','Komodo Dragon','2022/8/24'),
('Earth Science','Lemur','2022/1/31'),
('History','Cheetah','2022/4/6'),
('Economics','Dabchick','2020/12/26');

`,
];

export const authorResearchPaperData = [
  `
INSERT INTO authors_research_papers( author_no, paper_id)
    VALUES 
    (1, 8), (1, 5), (2, 1), ( 2, 4 ), (3, 2), ( 3, 6), (4, 7), (4, 3), (5, 9), (5, 10),
    (6, 11), (6, 12), (7, 13), ( 7, 14 ), (8, 15), ( 8, 16), (9, 17), (9, 18), (10, 19), (10, 20),
    (11, 21), (11, 22), (12, 23), ( 12, 24 ), (1, 25), ( 6, 26), (14, 27), (14, 28), (15, 29), (15, 30),
    (1, 25), (5, 16), (15, 23), ( 12, 13 ), (2, 25), ( 2, 26), (6, 27), (12, 28), (4, 29), (8, 30);`,
];
