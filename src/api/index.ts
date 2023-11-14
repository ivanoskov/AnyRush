import ResponseDataInterface from '../repositories/ResponseDataInterface';
import getEndpoints from '../server/db';

const endpoints = getEndpoints();

type ENDPOINTS = keyof typeof endpoints;
type RESPONSE_DATA = {
  data: string;
};

const getJson = async <T>(endpoint: ENDPOINTS): Promise<T> => {
  const path =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3001/api/${endpoint}`
      : `https://raw.githubusercontent.com/ivanoskov/any-algorithm/gh-pages/static/db/${endpoint}.json`;

  const response = await fetch(path);

  return await response.json();
};

type API = {
  get: {
    data: () => Promise<ResponseDataInterface>;
  };
};
const api: API = {
  get: {
    data: () => getJson<ResponseDataInterface>('data'),
  },
};

export type { RESPONSE_DATA, ENDPOINTS };
export default api;