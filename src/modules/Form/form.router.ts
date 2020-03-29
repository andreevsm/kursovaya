import Router, { IRouterContext } from 'koa-router';

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
  });
