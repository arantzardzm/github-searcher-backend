const express = require('express');
const redis = require("redis");
import * as bodyParser from 'body-parser';
import routes from './routes';

const port = 2900; // default port to listen
// const port_redis = 6379; // redis port to listen

// Configure redis
// const redis_client = redis.createClient(port_redis);

// Create app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`); // eslint-disable-line no-console
});
