import config from 'config';

import { app } from './app';

app.listen(config.get('server.port'), () => {
  console.log(`App is running on http://localhost:${config.get('server.port')}`);
});
