
export const cleanCrawlData = (crawlData) => {
  const movieResults = crawlData.results.map(result => {
    return {
      crawlText: result.opening_crawl,
      title: result.title,
      release: result.release_data
    };
  });
  return getRandom(movieResults);
};

const getRandom = (results) => {
  return results[Math.floor(Math.random()*results.length)];
};