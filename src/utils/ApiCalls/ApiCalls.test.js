import { fetchCrawlData } from './ApiCalls.js';
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

    it('should call cleanCrawlData', async () => {
      const mockMovieData = {
        results:[{}, {}, {}]
      };

      await fetchCrawlData();

      await expect(cleaner.cleanCrawlData()).toHaveBeenCalledWith(mockMovieData);

    });
  });

  // describe('fetch', () => {
    
  // });




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

});


