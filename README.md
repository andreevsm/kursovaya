# Change log
## 09.04.2020
- Добавил получение списка пройденных Анкет и Анкет по id для каждого Студента

## 08.04.2020
- Добавил API для отправки пройденной анкеты

## 07.04.2020
- Добавил логирование запросов в InfluxDB
- Добавил возможность получения списка Курсов, относящихся к конкретному Студенту

## 25.03.2020
- Добавил хранение сессий в Redis

# MongoDB
1. mongod --dbpath ~/Desktop/NoSQL/mongodb
2. mongo
3. use kursovaya
4. For example: db.courses.find().pretty() - удобно выводит в консоль полученные данные

# Neo4J
1. Создание связей
CREATE (s1:Student { name: 'Vasya' })-[:ESTIMATE {}]->(t:Tutor { name: 'Murlin' })-[r:RELATE {}]->(f:Form { name:'Успеваемость преподавателей' }),
(s1)-[:HAS]->(c:Course { name: "Разработка сетевых приложений" }),
(s2:Student { name: 'Sergey' })-[:ESTIMATE {}]->(t),
(s2)-[:HAS]->(c),
(t)-[con:CONDUCT]->(c)
RETURN s1, t, r, f, con, s2, c

2. Удаление всех узлов и связей
MATCH (n)
DETACH DELETE n

# Redis
1. redis-cli

# InfluxDB
1. influxd

# Роли пользователей:
1. 0 - Администратор
2. 1 - Контент - менеджер
3. 2 - Преподаватель
4. 3 - Студент
