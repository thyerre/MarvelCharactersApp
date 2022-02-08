import React, { createContext, useEffect, useState } from 'react';
import { MarvelCharacter } from '../interfaces';

import { getCharacters } from '../service';

export const MarvelCharacterContext = createContext({} as any);

export const MarvelCharacterProvider = (props: any) => {
  const [marvelCharacters, setMarvelCharacters] = useState<MarvelCharacter[]>(
    [],
  );
  const [loader, setLoader] = useState<boolean>(false);

  async function getAllMarvelCharacters() {
    const marvelCharacterList = await getCharacters();
    setMarvelCharacters(marvelCharacterList);
    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    getAllMarvelCharacters();
  }, []);

  return (
    <MarvelCharacterContext.Provider
      value={{ marvelCharacters, setMarvelCharacters, loader, setLoader }}
    >
      {props.children}
    </MarvelCharacterContext.Provider>
  );
};
