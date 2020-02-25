mongod --dbpath Desktop/NoSQL/mongodb

Neo4J -
CREATE (s1:Student { name: 'Vasya' })-[:ESTIMATE {}]->(t:Tutor { name: 'Murlin' })-[r:RELATE {}]->(f:Form { name:'Успеваемость преподавателей' })
CREATE (s1)-[:HAS]->(c:Course { name: "Разработка сетевых приложений" })
CREATE (s2:Student { name: 'Sergey' })-[:ESTIMATE {}]->(t)
CREATE (s2)-[:HAS]->(c)
CREATE (t)-[con:CONDUCT]->(c)
RETURN s1, t, r, f, con, s2, c
