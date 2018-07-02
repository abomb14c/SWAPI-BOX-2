import { cleanCrawlData } from "../Cleaner/Cleaner";

export const fetchCrawlData = async () => {
  const url = 'https://swapi.co/api/films/';

  const response = await fetch(url);
  const movieData = await response.json();
  const crawlData = await Promise.resolve(movieData);

  return cleanCrawlData(crawlData);

};

export const fetchPeopleData = async () => {
  const url = 'https://swapi.co/api/people/';

  const response = await fetch(url);
  const peopleData = await response.json();
  const resolvedPeople = await Promise.resolve(peopleData);
  const resolvedPeopleHome = await fetchPeopleHomeworld(resolvedPeople);
 
  return resolvedPeople;

};

export const fetchPeopleHomeworld = async (resolvedPeople) => {
  const homeworld = resolvedPeople.results.map(async person => {
    const response = await fetch(person.homeworld);
    const homeData = await response.json();
    const resolvedHome = await Promise.resolve(homeData);
    return resolvedHome;

  });
  return homeworld;
};
