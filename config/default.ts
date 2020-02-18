export default {
  root: process.cwd(),
  mongodb: {
    debug: true,
    uri: 'mongodb://localhost:27017/kursovaya'
  },
  redis: {
    uri: 'redis://127.0.0.1:6379'
  },
  server: {
    port: 3000
  }
};
