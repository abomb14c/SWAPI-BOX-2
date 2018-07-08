
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
      species: person.species.name,
      homeworld: person.homeworld.name,
      population: person.homeworld.population,
      id:`people${index}`
    };
  });
  return peopleResults;
};

export const cleanPlanetData = resolvedPlanetResidents => {
  const planetResults =resolvedPlanetResidents.map((planet, index) => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate, 
      residents: planet.residents,
      id:`people${index}`
    };
  });
  return planetResults;
};

export const cleanVehicleData = resolvedVehicles => {
  const vehicleResults = resolvedVehicles.map((vehicle, index) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      id:`people${index}`
    };
  });
  return vehicleResults;
};