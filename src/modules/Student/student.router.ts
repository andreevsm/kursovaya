import Router, { IRouterContext } from 'koa-router';

import { Student } from './student.model';
import { Answer } from '../Answer';

export const studentRouter = new Router({
  prefix: '/student'
})

studentRouter
  .get('/', async (ctx: IRouterContext) => {
    const students = await Student.find();
    ctx.body = students;
  })
  .post('/', async (ctx: IRouterContext) => {
    await Student.create(ctx.request.body);
  })
  .get('/answers', async (ctx: any) => {
    const { session } = ctx;

    const answers = await Answer.find({ 'student.id': session.id });
    ctx.body = answers;
  })
  .get('/answers/:id', async (ctx: any) => {
    const { session, params } = ctx;
    console.log(session.id);
    console.log(params.id);

    const answers = await Answer.find({ _id: params.id, 'student.id': session.id });
    ctx.body = answers;
  });
