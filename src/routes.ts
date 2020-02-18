import Router, { IRouterContext } from 'koa-router';

import {
  taskRouter,
  userRouter
} from './modules';

const router = new Router({
  prefix: '/api',
});

router.use(userRouter.routes());
router.use(taskRouter.routes());

router.get('/', (ctx: IRouterContext) => {
  ctx.body = 'Hello world';
});

export { router };
