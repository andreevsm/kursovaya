# MongoDB
1. mongod --dbpath ~/Desktop/NoSQL/mongodb
2. mongo
3. use kursovaya
4. For example: db.courses.find()

# Neo4J
CREATE (s1:Student { name: 'Vasya' })-[:ESTIMATE {}]->(t:Tutor { name: 'Murlin' })-[r:RELATE {}]->(f:Form { name:'Успеваемость преподавателей' }),
(s1)-[:HAS]->(c:Course { name: "Разработка сетевых приложений" }),
(s2:Student { name: 'Sergey' })-[:ESTIMATE {}]->(t),
(s2)-[:HAS]->(c),
(t)-[con:CONDUCT]->(c)
RETURN s1, t, r, f, con, s2, c
