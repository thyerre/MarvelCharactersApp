import { useContext } from 'react';
import { MarvelCharacterContext } from '../providers/avengers';

export function useAvengers() {
  return useContext(MarvelCharacterContext);
}
