
# Answers
## 1-) What colums violate 1NF? 

-> food_code and food_description colums  are multi-valued attributes

```
+-----------+------------------+
| food_code | food_description |
+-----------+------------------+
| C1, C2    | Curry, Cake      |
| S1, C2    | Soup, Cake       |
| S1, C2    | Soup, Cake       |
| P1, T1, M1| Pie, Tea, Mousse |
| P1, T1, M1| Pie, Tea, Mousse |
| F1, M1    | Falafal, Mousse  |
| G1, P2    | Goulash, Pasca   |
| P1, T1, M1| Pie, Tea, Mousse |
+-----------+------------------+
```

-> dinner_date has different value types 
```
+-------------+
| dinner_date |
+-------------+
| 2020-03-15  |
| 2020/03/15  |
| 2020/03/15  |
| 20-03-2020  | 
| 20-03-2020  |
| Mar 25 '20  | <--
| Mar 26 '20  | <--
| 01-04-2020  |
+-------------+
```

## 2-) What entities do you recognize that could be extracted?

-> dinners, foods, venues


## 3-) Name all the tables and columns that would make a 3NF compliant solution.

###### Member

+-----------+---------------+----------------+
| member_id | member_name   | member_address | 
+-----------+---------------+----------------+

###### Dinner

+-----------+-------------+
| dinner_id | dinner_date |
+-----------+-------------+



###### Venues

+------------+-------------------+
| venue_code | venue_description |
+------------+-------------------+



###### Food 

+-----------+------------------+
| food_code | food_description |
+-----------+------------------+



###### Member_Dinner

+----+-----------+-----------+
| id | member_id | dinner_id |
+----+-----------+-----------+



###### Member_Venue

+----+-----------+-----------+
| id | member_id | venue_code|
+----+-----------+-----------+



###### Member_Food
+----+-----------+-----------+
| id | member_id | food_code |
+----+-----------+-----------+

