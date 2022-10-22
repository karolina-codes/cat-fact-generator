import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

import { scrapeFacts } from '../src/services/factScraper';

dotenv.config();

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/facts', async (req, res) => {
  try {
    const response = await axios(
      'https://www.mygavet.com/services/blog/50-cat-facts-you-probably-didnt-know'
    );
    const facts = scrapeFacts(response.data);
    res.send(facts);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
