import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const URL = `https://api.thecatapi.com/v1/images/search?limit=52&mime_types=jpg,png&api_key=${process.env.API_KEY}`;

interface apiObject {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: string[];
}

export const getImages = () => {
  axios(URL)
    .then((response): apiObject[] => response.data)
    .then((data: apiObject[]): string[] => {
      const images = data.map((object: apiObject) => object.url);
      return images;
    });
};
