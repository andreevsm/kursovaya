import * as Koa from 'koa';

import session from 'koa-session';
import config from 'config';
import redisStore, { RedisOptions } from 'koa-redis';

const REDIS_OPTIONS: RedisOptions = {
  host: config.get('redis.host'),
  port: config.get('redis.port'),
  password: config.get('redis.password')
}

export const initRedisSession = (app: Koa) => {
  app.keys = ['keys', 'keykeys'];

  app.use(session({
    key: 'secret',
    store: redisStore(REDIS_OPTIONS),
  }, app));
}
