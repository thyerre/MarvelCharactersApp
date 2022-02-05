import { httpApi } from '../api';

export async function getAvengers(params: any = {}) {
  return await httpApi
    .get('/characters', { params })
    .then(({ data }: any) => data.data.results);
}
