import { mongoose } from '../../lib';

const studentSchema = new mongoose.Schema({
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
  },
  studentYear: {
    type: Number,
    min: 1,
    max: 5,
    default: 1
  }
})

export const Student = mongoose.model('Student', studentSchema);
