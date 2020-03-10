import Router, { IRouterContext } from 'koa-router';

import {
  courseRouter,
  formRouter,
  questionRouter,
  studentRouter,
  tutorRouter
} from './modules';

const router = new Router({
  prefix: '/api',
});

router.use(courseRouter.routes());
router.use(formRouter.routes());
router.use(questionRouter.routes());
router.use(studentRouter.routes());
router.use(tutorRouter.routes());

router.get('/', (ctx: IRouterContext) => {
  ctx.body = new Date();
});

export { router };
