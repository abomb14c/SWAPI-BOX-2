
export const cleanCrawlData = (crawlData) => {
  const movieResults = crawlData.results.map(result => {
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

export const cleanPeopleData = ((resolvedPeople, resolvedPeopleHome, resolvedPeopleSpecies) => {
  const cleanPeople = resolvedPeople.results.map(person => {
    // const personName = cleanPersonName(resolvedPeople);
    const personHome = cleanPersonHome(resolvedPeopleHome);
    const personSpecies = resolvedPeopleSpecies.name;

    return {
      name: person.name,
      species: personSpecies,
      homeworld: personHome.name,
      population: personHome.population
    };
  });
  return cleanPeople;
});



export const cleanPersonHome = (resolvedPeopleHome) => {
  const homeworld = resolvedPeopleHome.map(home => {
    return {
      name: home.name,
      population: home.population
    };
  });
  return homeworld;
};