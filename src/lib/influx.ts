import { InfluxDB, FieldType } from 'influx';
import config from 'config';

export const influx = new InfluxDB({
  host: config.get('influx.host'),
  database: config.get('influx.database'),
  schema: [
    {
      measurement: 'response_timestamps',
      fields: {
        path: FieldType.STRING,
        duration: FieldType.FLOAT
      },
      tags: [ 'host' ]
    }
  ]
})
