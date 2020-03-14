import * as Koa from 'koa';
import passport from 'koa-passport';

export const initPassport = (app: Koa) => {
  app.use(passport.initialize());
  app.use(passport.session());
};
