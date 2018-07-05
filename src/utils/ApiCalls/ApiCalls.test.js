import { fetchCrawlData } from './ApiCalls.js';
import * as mockData from '../mockData';


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
  });
  
});


