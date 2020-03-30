import { pbkdf2, randomBytes } from 'crypto';
import config from 'config';

import { mongoose } from '../../lib';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'E-mail пользователя не должен быть пустым.',
    validate: [
      {
        validator(value: any) {
          return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        message: 'Некорректный email.'
      }
    ],
    unique: 'Такой email уже существует'
  },
  displayName: {
    type: String,
    required: 'У пользователя должно быть имя',
  },
  passwordHash: {
    type: String,
    required: true
  },
  salt: {
    required: true,
    type: String
  },
}, {
  timestamps: true,
});

const generatePassword = (salt: string, password: string) => {
  return new Promise((resolve, reject) => {
    pbkdf2(
      password,
      salt,
      config.get('crypto.hash.iterations'),
      config.get('crypto.hash.length'),
      'sha512',
      (err, key) => {
        if (err) return reject(err);
        resolve(key.toString('hex'));
      }
    );
  });
}

userSchema.methods.setPassword = async function (password: string) {
  if (password && password.length < 4) {
    throw new Error('Пароль должен быть минимум 4 символа.');
  }

  this.salt = randomBytes(config.get('crypto.hash.length')).toString('hex');
  this.passwordHash = await generatePassword(this.salt, password);
};

userSchema.methods.checkPassword = async function (password: string) {
  if (!password) return false;

  const hash = await generatePassword(this.salt, password);
  return hash === this.passwordHash;
};

export const User = mongoose.model('User', userSchema);
