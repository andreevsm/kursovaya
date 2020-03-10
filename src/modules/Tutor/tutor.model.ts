import { mongoose } from '../../lib';

const tutorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'Необходимо ввести имя'
  },
  lastName: {
    type: String,
    required: 'Необходимо ввести фамилию'
  },
  age: {
    type: Number,
    min: 18,
    max: 70,
    default: 18
  }
})

export const Tutor = mongoose.model('Tutor', tutorSchema);