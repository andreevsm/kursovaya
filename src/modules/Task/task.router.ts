import Router, { IRouterContext } from 'koa-router';

import { Task } from './task.model';

export const taskRouter = new Router({
  prefix: '/task'
})

taskRouter
  .get('/', async (ctx: IRouterContext) => {
    const tasks = await Task.find();
    ctx.body = tasks;
  });

taskRouter
  .post('/', async (ctx: IRouterContext) => {
    await Task.create(ctx.request.body);
  });
