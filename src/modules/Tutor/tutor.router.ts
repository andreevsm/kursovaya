import Router, { IRouterContext } from 'koa-router';

import { Tutor } from './tutor.model';

export const tutorRouter = new Router({
  prefix: '/tutor'
})

tutorRouter
  .get('/', async (ctx: IRouterContext) => {
    const tutors = await Tutor.find();
    ctx.body = tutors;
  });

tutorRouter
  .post('/', async (ctx: IRouterContext) => {
    await Tutor.create(ctx.request.body);
  });
