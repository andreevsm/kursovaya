import { mongoose } from '../../lib';

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Необходимо ввести название анкеты'
  },
  description: {
    type: String,
    required: 'Необходимо ввести описание анкеты'
  }
}, {
  timestamps: true,
})

export const Form = mongoose.model('Form', formSchema);
