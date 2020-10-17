import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';

const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// Configure env file
dotenv.config();

// Default port to listen
const port = process.env.PORT || 2900;

// Create app
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

// Start the express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`); // eslint-disable-line no-console
});
