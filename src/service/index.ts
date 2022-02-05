import { httpApi } from '../api';

export async function getAvengers(params: any = {}) {
  console.log('service acessado', params);
  return await httpApi
    .get('/characters', { params })
    .then(({ data }: any) => data.data.results);
}
