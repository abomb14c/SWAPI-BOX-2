export const fetchCrawlData = async () => {
  const url = 'https://swapi.co/api/films/';

  const response = await fetch(url);
  const crawlData = await response.json();

  return Promise.resolve(crawlData);

};