import Router, { IRouterContext } from 'koa-router';

import { Answer } from './answer.module';

export const answerRouter = new Router({
  prefix: '/answers'
})

answerRouter
  .get('/', async (ctx: IRouterContext) => {
    const answers = await Answer.find();

    ctx.body = answers;
  })
  .post('/', async (ctx: IRouterContext) => {
    const answer = await Answer.create(ctx.request.body);

    ctx.body = answer;
  });
