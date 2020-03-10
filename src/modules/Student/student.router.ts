import Router, { IRouterContext } from 'koa-router';

import { Student } from './student.model';

export const studentRouter = new Router({
  prefix: '/student'
})

studentRouter
  .get('/', async (ctx: IRouterContext) => {
    const students = await Student.find();
    ctx.body = students;
  });

studentRouter
  .post('/', async (ctx: IRouterContext) => {
    await Student.create(ctx.request.body);
  });
