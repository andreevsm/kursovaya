import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

export const initBodyParser = (app: Koa) => app.use(bodyParser());
