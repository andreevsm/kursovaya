import { mongoose } from '../../lib';
import { questionSchema } from '../Question';

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Необходимо ввести название анкеты'
  },
  description: {
    type: String,
    required: 'Необходимо ввести описание анкеты'
  },
  questions: [questionSchema],
}, {
  timestamps: true,
})

export const Form = mongoose.model('Form', formSchema);
