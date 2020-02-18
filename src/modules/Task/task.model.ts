import { mongoose } from '../../lib';

const tutorSchema = new mongoose.Schema({
  name: {
    type: String
  }
})

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Необходимо ввести название анкеты'
  },
  old: {
    type: Number
  },
  questions: {
    type: Array
  },
  tutors: [ tutorSchema ]
}, {
  timestamps: true,
});

export const Task = mongoose.model('Task', taskSchema);
