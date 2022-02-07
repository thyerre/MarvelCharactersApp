import React from 'react';
import { FlatList } from 'react-native';

import { useMarvelCharacters } from '../../hooks/useMarvelCharacters';
import { Character } from '../Character';
import { CharactersNotFound } from '../CharactersNotFound';
import { ContainerList } from './styles';

export function ListCharacters() {
  const { marvelCharacters } = useMarvelCharacters();

  const renderItem = (item: any) => (
    <Character marvelCharacter={item.item} key={item.id} />
  );

  return (
    <ContainerList>
      {marvelCharacters.length > 0 ? (
        <FlatList
          data={marvelCharacters}
          renderItem={renderItem}
          keyExtractor={(avenger: any) => avenger.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <CharactersNotFound />
      )}
    </ContainerList>
  );
}
