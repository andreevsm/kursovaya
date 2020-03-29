import Router, { IRouterContext } from 'koa-router';

import {
  courseRouter,
  formRouter,
  questionRouter,
  studentRouter,
  tutorRouter,
  neo4jRouter,
  userRouter,
  responseTimestampsRouter
} from './modules';

const router = new Router({
  prefix: '/api',
});

// [TODO]: Вынести подключение роутов в отдельный файл
router.use(courseRouter.routes());
router.use(formRouter.routes());
router.use(questionRouter.routes());
router.use(studentRouter.routes());
router.use(tutorRouter.routes());
router.use(neo4jRouter.routes());
router.use(userRouter.routes());
router.use(responseTimestampsRouter.routes());

router.get('/', (ctx: IRouterContext) => {
  ctx.body = new Date();
});

export { router };
