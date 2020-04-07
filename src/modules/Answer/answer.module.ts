import { mongoose } from '../../lib';

const answerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Необходимо ввести название анкеты'
  },
  description: {
    type: String,
    required: 'Необходимо ввести описание анкеты'
  },
  student: {
    id: {
      type: String,
      required: 'Необходимо указать id Студента'
    },
    name: {
      type: String,
      required: 'Необходимо указать имя Студента'
    }
  },
  tutor: {
    id: {
      type: String,
      required: 'Необходимо указать id Преподавателя'
    },
    name: {
      type: String,
      required: 'Необходимо указать имя Преподавателя'
    }
  },
  answers: [{
    id: {
      type: String,
      required: 'Необходимо указать id Вопроса'
    },
    name: {
      type: String,
      required: 'Необходимо указать название Вопроса'
    },
    value: {
      type: String,
      required: 'Необходимо указать ответ на Вопрос'
    }
  }]
}, {
  timestamps: true,
})

export const Answer = mongoose.model('Answer', answerSchema);
