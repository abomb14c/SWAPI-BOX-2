import { cleanCrawlData } from "../Cleaner/Cleaner";

export const fetchCrawlData = async () => {
  const url = 'https://swapi.co/api/films/';

  const response = await fetch(url);
  const movieData = await response.json();
  const crawlData = await Promise.resolve(movieData);

  return cleanCrawlData(crawlData);

};