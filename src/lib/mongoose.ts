const mongoose = require('mongoose');
import config from 'config';
const beautifyUnique = require('mongoose-beautiful-unique-validation');

mongoose.set('debug', config.get('mongodb.debug'));
mongoose.plugin(beautifyUnique);
mongoose.connect(config.get('mongodb.uri'), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
