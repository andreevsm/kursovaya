import { Strategy } from 'passport-local';

import { User } from '../../../modules'

const localStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      // [TODO]: Расширить тип для User
      const user: any = await User.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'Нет такого пользователя.' });
      }

      const isValidPassword = await user.checkPassword(password);

      if (!isValidPassword) {
        return done(null, false, { message: 'Пароль неверен.' });
      }

      return done(null, user, { message: 'Добро пожаловать!' });
    } catch (err) {
      console.error(err);
      done(err);
    }
  }
)

export { localStrategy };
