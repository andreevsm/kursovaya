import Koa from 'koa';
import favicon from 'koa-favicon';

export const initFavicon = (app: Koa) => app.use(favicon('favicon.ico'));
