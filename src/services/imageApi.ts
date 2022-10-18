import axios from 'axios';

const URL = `https://api.thecatapi.com/v1/images/search?limit=1&mime_types=jpg,png`;

export const getImage = async (): Promise<string> => {
  const response = await axios(URL);
  const image = response.data[0].url;
  return image;
};
