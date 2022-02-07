import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { getCharacters } from '../service';

export const MarvelCharacterContext = createContext({} as any);

export const AvengersProvider = (props: any) => {
  const [marvelCharacters, setMarvelCharacters] = useState({});

  async function getAllAvengers() {
    const marvelCharacterList = await getCharacters();
    setMarvelCharacters(marvelCharacterList);
  }

  useEffect(() => {
    getAllAvengers();
  }, []);

  return (
    <MarvelCharacterContext.Provider
      value={{ marvelCharacters, setMarvelCharacters }}
    >
      {props.children}
    </MarvelCharacterContext.Provider>
  );
};
