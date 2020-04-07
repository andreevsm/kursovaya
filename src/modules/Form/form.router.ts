import Router, { IRouterContext } from 'koa-router';

import { neo4jDriver } from '../../lib';

import { Form } from './form.model';

export const formRouter = new Router({
  prefix: '/form'
})

formRouter
  .get('/', async (ctx: IRouterContext) => {
    const forms = await Form.find();
    ctx.body = forms;
  })
  .post('/', async (ctx: IRouterContext) => {
    await Form.create(ctx.request.body);
  })
  .get('/:id/student', async (ctx) => {
    const { id } = ctx.params;
    const form = await Form.findById(id);

    ctx.body = form;
  })
  .get('/student', async (ctx: any) => {
    const { session } = ctx;

    const { records } = await neo4jDriver
      .session()
      .run(`
        MATCH (:Student { id: "${session.id}" })-[:LISTEN]->(:Course)<-[:TEACH]-(:Tutor)-[:RELATE]->(f:Form)
        RETURN f
      `);

    const forms = records.map((record: any) => record.toObject().f.properties);

    ctx.body = forms;
  });
