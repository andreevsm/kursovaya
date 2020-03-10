import { mongoose } from '../../lib';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Необходимо ввести название курса'
  }
}, {
  timestamps: true,
});

export const Course = mongoose.model('Course', courseSchema);
