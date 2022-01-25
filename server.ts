import axios from 'axios';
import express, { Request, Response } from 'express';
import * as logger from './logger';

const app = express();
const PORT = 8000;
const GITHUB_API_ENDPOINT = 'https://api.github.com';

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.get('/api/search/:repository', async (req: Request, res: Response) => {
  const repository = req.params.repository;
  if (repository === '') return res.status(409).send({ message: 'Search param required' });

  const url = `${GITHUB_API_ENDPOINT}/search/repositories?q=${repository}`;
  const response = await axios.get(url);

  await logger.logger(`${url}`);

  return res.json(response.data);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
