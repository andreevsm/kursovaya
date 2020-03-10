import Neo4j from 'neo4j-driver';
import config from 'config';

const neo4jDriver = Neo4j.driver(
  config.get('neo4j.url'),
  Neo4j.auth.basic(
    config.get('neo4j.username'),
    config.get('neo4j.password')
  )
);

export { neo4jDriver };
