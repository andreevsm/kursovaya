import Router, { IRouterContext } from 'koa-router';

import { Student } from '../Student';
import { Course } from '../Course';
import { Form } from '../Form';
import { Question } from '../Question';
import { Tutor } from '../Tutor';

import { neo4jDriver } from '../../lib';

export const neo4jRouter = new Router({
  prefix: '/neo4j'
})

neo4jRouter
  .get('/', async (ctx: IRouterContext) => {

    const tutros = await neo4jDriver
      .session()
      .run(`
        MATCH (t:Tutor)
        MATCH (c:Course)
        CREATE (t)-[:TEACH]->(c)
      `);
  });
