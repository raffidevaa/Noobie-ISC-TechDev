import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './router'

const app = express();

app.use(
  cors(),
);
dotenv.config();
app.use(express.json());

// Health check endpoint
app.get('/health', (request, response) => {
  response.status(200).send('Server is up and running');
});

app.use('/', routes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

