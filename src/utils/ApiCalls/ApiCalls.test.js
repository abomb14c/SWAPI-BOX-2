import { fetchCrawlData, fetchPeopleData } from './ApiCalls.js';
import * as mockData from '../mockData';
import * as cleaner from '../Cleaner/Cleaner';


describe('ApiCalls', () => {

  describe('fetchCrawlData', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          ok: true,
          json: () => Promise.resolve({results: mockData.mockCrawlData.results})
        })
      );
    });
    
    it('calls fetchCrawlData with the correct params', async () => {

      const expected = 'https://swapi.co/api/films/';
      
      await fetchCrawlData();

      await expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should return cleanCrawlData', async () => {
      const expected = { crawlText: 'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire\'s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire\'s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....',
        title: 'A New Hope',
        release: '1977-05-25' };

      const actual = cleaner.cleanCrawlData(mockData.mockCrawlData);

      await fetchCrawlData();
      
      await expect(actual).toEqual(expected);

    });
  });

  describe('fetchPeopleData', () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({results: mockData.mockPeopleData.results})
      })
    );
  });

  it('calls fetchCrawlData with the correct params', async () => {

    const expected = 'https://swapi.co/api/people/';
    
    await fetchPeopleData();

    await expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return cleanPeopleData', async () => {
    const expected = [];
    const resolvedPeopleSpecies = [];

    const actual = cleaner.cleanPeopleData(resolvedPeopleSpecies);

    await fetchPeopleData();

    await expect(actual).toEqual(expected);

  });
});


// it("returns the correct people data", async () => {
//   const results = [
//     {
//       name: "Luke Skywalker",
//       category: "people",
//       species: 'human',
//       planet: 'earth yo',
//       population: 1,
//       id:'people1',
//       favorite: false
//     }
//   ];
//   await expect(getPeopleData()).resolves.toEqual(results);
// });

// });


