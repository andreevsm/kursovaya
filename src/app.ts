import Koa from 'koa';

import {
  initBodyParser,
  initErrors,
  initFavicon,
  initLogger,
  initPassport,
  initRedisSession,
  initInfluxDB
} from './handlers';
import { router } from './routes';

export const app = new Koa();

initLogger(app);
initBodyParser(app);
initFavicon(app);
initErrors(app);
initPassport(app);
initRedisSession(app);
initInfluxDB(app);

app.use(router.routes());
