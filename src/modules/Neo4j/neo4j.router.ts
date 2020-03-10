import Router, { IRouterContext } from 'koa-router';

import { neo4jDriver } from '../../lib';

export const neo4jRouter = new Router({
  prefix: '/neo4j'
})

neo4jRouter
  .get('/', async (ctx: IRouterContext) => {
    const session = neo4jDriver
      .rxSession()
      .run(`
        CREATE (s1:Student { name: 'Vasya' })-[:ESTIMATE {}]->(t:Tutor { name: 'Murlin' })-[r:RELATE {}]->(f:Form { name:'Успеваемость преподавателей' })
        CREATE (s1)-[:HAS]->(c:Course { name: "Разработка сетевых приложений" })
        CREATE (s2:Student { name: 'Sergey' })-[:ESTIMATE {}]->(t)
        CREATE (s2)-[:HAS]->(c)
        CREATE (t)-[con:CONDUCT]->(c)
        RETURN s1, t, r, f, con, s2, c
      `)
      .records()
      .subscribe({
        next: data => console.log(data),
        complete: () => console.log('completed'),
        error: err => console.log(err)
      });
    ctx.body = [];
  });
