import * as Koa from 'koa';
import logger from 'koa-logger';

export const initLogger = (app: Koa) => app.use(logger());