import Koa from 'koa';
import { IRouterContext } from 'koa-router';

export const initErrors = (app: Koa) => app.use(async (ctx: IRouterContext, next: any) => {
  try {
    await next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = e.message;
    console.error(e);
  }
});
