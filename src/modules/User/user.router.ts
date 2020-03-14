import Router, { IRouterContext } from 'koa-router';

import { passport } from '../../lib';
import { User } from './user.model';

export const userRouter = new Router({
  prefix: '/user'
});

userRouter
  .post('/create', async (ctx: IRouterContext) => {

    console.log('body', ctx.request.body);

    const user = new User(ctx.request.body);
    console.log('user', user);
    await user.setPassword(ctx.request.body.password);
    console.log('user', user);

    await user.save();
  });

userRouter
  .get('/', async (ctx: IRouterContext) => {
    ctx.body = 'Пользователь не найден'
  });

userRouter
  .post('/login', async (ctx: any, next: any) => {
    console.log(next);
    await passport.authenticate('local', async (error, user, info) => {
      console.log(error);
      if (error) {
        throw error;
      }

      if (user) {
        await ctx.login(user);

        ctx.body = {
          displayName: user.displayName,
          email: user.email
        };
      } else {
        ctx.status = 401;
        ctx.body = info;
      }
    })(ctx, next);
  });
