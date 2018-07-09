import { fetchCrawlData, fetchPeopleData, fetchPeopleHomeworld } from './ApiCalls.js';
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

describe('fetchPeopleHomeworld', () => {
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve({results: mockData.mockPeopleData.results})
    })
  );

  it('calls fetchPeopleHomeworld with the correct params', async () => {
    const mockPeople = [{birth_year: "19BBY",
      created:"2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      eye_color: "blue",
      films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
      gender: "male",
      hair_color: "blond",
      height: "172",
      homeworld: "https://swapi.co/api/planets/1/",
      mass: "77",
      name: "Luke Skywalker",
      skin_color: "fair",
      species: ["https://swapi.co/api/species/1/"],
      starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
      url: "https://swapi.co/api/people/1/",
      vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]}];
    
    await fetchPeopleHomeworld(mockPeople);

    await expect(fetchPeopleHomeworld()).resolves.toEqual(mockPeople);
  });
});


