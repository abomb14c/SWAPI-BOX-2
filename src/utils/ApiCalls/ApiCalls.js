import { cleanCrawlData, cleanPeopleData, cleanPlanetData } from "../Cleaner/Cleaner";


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

  const resolvedPlanetResidents = await fetchPlanetResidents(planetData);
  
  return cleanPlanetData(resolvedPlanetResidents);
};

export const fetchPlanetResidents = async (planetData) => {
  const planetResidents = await planetData.map( async planet => {
    const residents = await residentData(planet.residents);

    return {...planet, residents};
  });
  return Promise.all(planetResidents);
};

export const residentData = (residents) => {
  const residentNames = residents.map( async resident => {
    const response = await fetch(resident);
    const residentName = await response.json();

    return residentName.name;
  });
  return Promise.all(residentNames);
};
 
export const fetchVehicleData = async () => {
  const url = 'https://swapi.co/api/vehicles/';

  const response = await fetch(url);
  const vehicleData = await response.json();
  const vehicleResults = vehicleData.results;

  console.log(vehicleData)
};