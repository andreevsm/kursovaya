import Router, { IRouterContext } from 'koa-router';

import { passport } from '../../lib';
import { User } from './user.model';

export const userRouter = new Router({
  prefix: '/user'
});

userRouter
  .post('/create', async (ctx: IRouterContext) => {
    const user = new User(ctx.request.body);
    await user.setPassword(ctx.request.body.password);
    await user.save();
  })
  .get('/', async (ctx: any) => {
    console.log('awasome', ctx);
    console.log('ctx.session', ctx.session);
    ctx.body = 'Пользователь не найден'
  })
  .post('/login', async (ctx: any, next: any) => {
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

        ctx.session!.userEmail = user.email;
        ctx.session!.createdAt = new Date();
        ctx.session!.role = user.role;
        ctx.session!.id = user._id;
      } else {
        ctx.status = 401;
        ctx.body = info;
      }
    })(ctx, next);
  });
