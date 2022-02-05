import { httpApi } from '../api';

export async function getCharacters(params: any = {}) {
  return await httpApi
    .get('/characters', { params })
    .then(({ data }: any) => data.data.results);
}

export async function getComicsByIdCharacter(id: number): Promise<any[]> {
  return await httpApi
    .get(`/characters/${id}/comics`)
    .then(({ data }: any) => data.data.results);
}
