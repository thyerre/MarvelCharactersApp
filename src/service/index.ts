import { httpApi } from '../api';

export async function getAvengers() {
  return await httpApi
    .get('/characters')
    .then(({ data }: any) => data.data.results);
}
