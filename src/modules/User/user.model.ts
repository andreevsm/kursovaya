import { mongoose } from '../../lib';

const publicFields = ['email', 'displayName'];

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: 'E-mail пользователя не должен быть пустым.',
    validate: [
      {
        validator(value: string) {
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
    unique: 'Такое имя уже существует'
  }
}, {
  timestamps: true
});

userSchema.statics.publicFields = publicFields;

export default mongoose.model('User', userSchema);
