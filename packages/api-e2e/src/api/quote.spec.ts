import axios from 'axios';
import * as process from 'process';

describe('QuoteModule', () => {
  it('/api/quote/1', async () => {
    const res = await axios.get(`/api/movie/1`);

    expect(res.status).toBe(200);
  });

  it('/api/movie/1/quote', async () => {
    const res = await axios.get(`/api/movie/1`);

    expect(res.status).toBe(200);
  });
});
