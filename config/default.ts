export default {
  root: process.cwd(),
  mongodb: {
    debug: true,
    uri: 'mongodb://localhost:27017/kursovaya'
  },
  server: {
    port: 3000
  },
  neo4j: {
    url: 'bolt://localhost:7687',
    username: 'neo4j',
    password: '1234'
  },
  secret: 'app',
  crypto: {
    hash: {
      length: 128,
      iterations: 10
    }
  },
  redis: {
    port: 6379,
    host: 'localhost',
    password: 'secret'
  },
  session: {
    secret: 'app',
    resave: false
  },
  influx: {
    host: 'localhost',
    database: 'kursovaya'
  }
};
