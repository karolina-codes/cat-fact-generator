import axios from 'axios';
import * as Cheerio from 'cheerio';

export const URL =
  'https://www.mygavet.com/services/blog/50-cat-facts-you-probably-didnt-know';

export const facts: string[] = [];

export const getFacts = async (): Promise<string[]> => {
  const response = await axios(URL);
  const markup = response.data;
  const $ = Cheerio.load(markup);

  $('li:nth-child(49)').remove();
  $('li:nth-child(26)').remove();

  $('li', 'div[class="field-item even"]').each(
    (i: number, element: cheerio.Element) => {
      facts.push($(element).text());
    }
  );

  return facts;
};
