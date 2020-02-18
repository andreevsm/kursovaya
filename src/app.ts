import Koa from 'koa';

import {
  initBodyParser,
  initErrors,
  initFavicon,
  initLogger
} from './handlers';
import { router } from './routes';

export const app = new Koa();

initLogger(app);
initBodyParser(app);
initFavicon(app);
initErrors(app);

app.use(router.routes());

