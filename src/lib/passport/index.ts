import passport from 'koa-passport';
import { User } from '../../modules';

import { localStrategy } from './strategies';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, done);
});

passport.use(localStrategy);

export { passport };
