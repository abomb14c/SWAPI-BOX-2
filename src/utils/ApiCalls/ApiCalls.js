import { cleanCrawlData, cleanPeopleData } from "../Cleaner/Cleaner";


export const fetchCrawlData = async () => {
  const url = 'https://swapi.co/api/films/';

  const response = await fetch(url);
  const movieData = await response.json();

  return cleanCrawlData(movieData);

};

export const fetchPeopleData = async () => {
  const url = 'https://swapi.co/api/people/';

  const response = await fetch(url);
  const rawData = await response.json();
  const peopleData = rawData.results;

  const resolvedPeopleHome = await fetchPeopleHomeworld(peopleData);
  const resolvedPeopleSpecies = await fetchPeopleSpecies(resolvedPeopleHome);

  return cleanPeopleData(resolvedPeopleSpecies);

};

export const fetchPeopleHomeworld = async (people) => {
  const homeworld = people.map(async person => {
    const response = await fetch(person.homeworld);
    const homeData = await response.json();

    return {...person, homeworld: homeData};

  });
  return Promise.all(homeworld);
};

export const fetchPeopleSpecies = async (people) => {
  const species = people.map(async person => {
    const response = await fetch(person.species);
    const speciesData = await response.json();

    return {...person, species: speciesData};
  });
  return Promise.all(species);
};

export const fetchPlanetData = async () => {
  const url = 'https://swapi.co/api/planets/';

  const response = await fetch(url);
  const rawData = await response.json();
  const planetData = rawData.results;

  console.log(planetData);
};
