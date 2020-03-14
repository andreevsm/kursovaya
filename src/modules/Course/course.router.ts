import Router, { IRouterContext } from 'koa-router';

import { Course } from './course.model';

export const courseRouter = new Router({
  prefix: '/course'
})

courseRouter
  .get('/', async (ctx: IRouterContext) => {
    console.log('ctx', ctx);
    const courses = await Course.find();
    ctx.body = courses;
  });

courseRouter
  .post('/', async (ctx: IRouterContext) => {
    await Course.create(ctx.request.body);
  });
