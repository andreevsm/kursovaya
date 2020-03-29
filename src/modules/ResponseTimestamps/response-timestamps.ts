import Router, { IRouterContext } from "koa-router";

import { influx } from '../../lib';

export const responseTimestampsRouter = new Router({
  prefix: '/response-timestamps'
});

responseTimestampsRouter
  .get('/', async (ctx: IRouterContext) => {
    try {
      const responseTimestamps = await influx.query(`
        select * from response_timestamps
        order by time desc
        limit 10
      `);

      ctx.body = responseTimestamps;
    } catch (error) {
      console.error(error);
    }
  })
