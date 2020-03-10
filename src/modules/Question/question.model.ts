import { mongoose } from '../../lib';

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Необходимо ввести название вопроса'
  }
}, {
  timestamps: true,
});

export const Question = mongoose.model('Question', questionSchema);
