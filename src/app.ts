import * as bodyParser from 'body-parser';
import routes from './routes';

const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// Default port to listen
const port = 2900;

// Create app
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`); // eslint-disable-line no-console
});
