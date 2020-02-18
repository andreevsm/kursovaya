import mongoose from 'mongoose';
import config from 'config';

// [TODO]: Написать .d.types для этой библиотеки
const beautifyUnique = require('mongoose-beautiful-unique-validation');

mongoose.set('debug', config.get('mongodb.debug'));
mongoose.plugin(beautifyUnique);
mongoose.connect(config.get('mongodb.uri'), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export { mongoose };
