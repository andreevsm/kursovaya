import Koa from 'koa';
import Router, { IRouterContext } from 'koa-router';

import {
  initBodyParser,
  initErrors,
  initFavicon,
  initLogger
} from './handlers';
import { userRouter } from './modules/User/user.router';

export const app = new Koa();

initLogger(app);
initBodyParser(app);
initFavicon(app);
initErrors(app);

const router = new Router({
  prefix: '/api',
});

router.use(userRouter.routes());

router.get('/', (ctx: IRouterContext) => {
  ctx.body = 'Hello world';
});

app.use(router.routes());

