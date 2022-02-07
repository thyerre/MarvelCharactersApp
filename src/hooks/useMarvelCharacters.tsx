import { useContext } from 'react';
import { MarvelCharacterContext } from '../providers/avengers';

export function useMarvelCharacters() {
  return useContext(MarvelCharacterContext);
}
