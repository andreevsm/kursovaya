import Router, { IRouterContext } from 'koa-router';

const User = require('./user.model');

export const userRouter = new Router({
  prefix: '/user'
});

userRouter
  .get('/', async (ctx: IRouterContext) => {
    const users = await User.find({});
    ctx.body = users.map((user: any) => user.toObject());
  });