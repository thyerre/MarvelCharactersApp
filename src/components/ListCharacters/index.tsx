import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { useMarvelCharacters } from '../../hooks/useMarvelCharacters';
import { Character } from '../Character';
import { CharactersNotFound } from '../CharactersNotFound';
import { ContainerList } from './styles';

export function ListCharacters() {
  const { marvelCharacters, loader } = useMarvelCharacters();

  const renderItem = (item: any) => (
    <Character marvelCharacter={item.item} key={item.id} />
  );

  return (
    <ContainerList>
      {loader ? <ActivityIndicator size="large" /> : null}
      {marvelCharacters.length > 0 || loader ? (
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
