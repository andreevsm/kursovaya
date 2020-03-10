# MongoDB
1. mongod --dbpath Desktop/NoSQL/mongodb
2. mongo
3. use kursovaya
4. For example: db.courses.find()

# Neo4J
1. CREATE (s1:Student { name: 'Vasya' })-[:ESTIMATE {}]->(t:Tutor { name: 'Murlin' })-[r:RELATE {}]->(f:Form { name:'Успеваемость преподавателей' })
2. CREATE (s1)-[:HAS]->(c:Course { name: "Разработка сетевых приложений" })
3. CREATE (s2:Student { name: 'Sergey' })-[:ESTIMATE {}]->(t)
4. CREATE (s2)-[:HAS]->(c)
5. CREATE (t)-[con:CONDUCT]->(c)
6. RETURN s1, t, r, f, con, s2, c
