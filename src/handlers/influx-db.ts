import Koa from 'koa';
import { IRouterContext } from 'koa-router';
import { hostname } from 'os';

import { influx } from '../lib';

export const initInfluxDB = (app: Koa) => app.use(async (ctx: IRouterContext, next: any) => {
  const startDate = Date.now();

  ctx.res.on('finish', async () => {
    const duration = Date.now() - startDate;
    console.log(`Request to ${ctx.request.path} took ${duration}ms`)

    try {
      await influx.writePoints([
        {
          measurement: 'response_timestamps',
          tags: { host: hostname() },
          fields: { duration, path: ctx.request.path }
        }
      ])
    } catch (error) {
      console.error(error.message);
    }
  })

  await next();
})