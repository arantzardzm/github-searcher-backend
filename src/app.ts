import * as bodyParser from 'body-parser';
import routes from './routes';

const express = require('express');

const app = express();
const port = 2900; // default port to listen

app.use(bodyParser.json());
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`); // eslint-disable-line no-console
});
