
export const cleanCrawlData = (movieData) => {
  const movieResults = movieData.results.map(result => {
    return {
      crawlText: result.opening_crawl,
      title: result.title,
      release: result.release_date
    };
  });
  return getRandom(movieResults);
};

const getRandom = (results) => {
  return results[Math.floor(Math.random()*results.length)];
};

export const cleanPeopleData = resolvedPeopleSpecies => {
  const peopleResults = resolvedPeopleSpecies.map((person, index) => {
    return {
      name: person.name,
      category:'people',
      species: person.species.name,
      homeworld: person.homeworld.name,
      population: person.homeworld.population,
      id:`people${index}`,
      favorite: false
    };
  });
  return peopleResults;
};

export const cleanPlanetData = resolvedPlanetResidents => {
  const planetResults =resolvedPlanetResidents.map((planet, index) => {
    return {
      name: planet.name,
      category:'planets',
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate, 
      residents: planet.residents,
      id:`planets${index}`,
      favorite: false
    };
  });
  return planetResults;
};

export const cleanVehicleData = resolvedVehicles => {
  const vehicleResults = resolvedVehicles.map((vehicle, index) => {
    return {
      name: vehicle.name,
      category:'vehicles',
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      id:`vehicles${index}`,
      favorite: false
    };
  });
  return vehicleResults;
};