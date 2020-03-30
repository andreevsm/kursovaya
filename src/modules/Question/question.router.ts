import Router, { IRouterContext } from 'koa-router';

import { Question } from './question.model';

export const questionRouter = new Router({
  prefix: '/question'
})

questionRouter
  .get('/', async (ctx: IRouterContext) => {
    const questions = await Question.find();
    ctx.body = questions;
  })
  .post('/', async (ctx: IRouterContext) => {
    await Question.create(ctx.request.body);
  });
