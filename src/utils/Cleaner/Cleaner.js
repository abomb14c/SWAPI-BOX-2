
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
  const peopleResults = resolvedPeopleSpecies.map(person => {
    return {
      name: person.name,
      species: person.species.name,
      homeworld: person.homeworld.name,
      population: person.homeworld.population
    };
  });
  return peopleResults;
};

