import axios from 'axios';
import * as process from 'process';

describe('MovieModule', () => {
  it('/api/movie/1', async () => {
    const res = await axios.get(`/api/movie/1`);

    expect(res.status).toBe(200);
  });
});
