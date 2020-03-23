import Router, { IRouterContext } from 'koa-router';

import { neo4jDriver } from '../../lib';

export const neo4jRouter = new Router({
  prefix: '/neo4j'
})

neo4jRouter
  .get('/', async (ctx: IRouterContext) => {

    const tutors = await neo4jDriver
      .session()
      .run(`
        MATCH (t:Tutor)
        RETURN t
      `);

    tutors.records.forEach(record => console.log(record.toObject()));
  });
