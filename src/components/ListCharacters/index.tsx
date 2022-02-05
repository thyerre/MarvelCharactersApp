import React from 'react';
import { FlatList } from 'react-native';

import { useAvengers } from '../../hooks/useAvengers';
import { Character } from '../Character';
import { CharactersNotFound } from '../CharactersNotFound';
import { ContainerList } from './styles';

export function ListCharacters() {
  const { avengers } = useAvengers();

  const renderItem = (avenger: any) => (
    <Character avenger={avenger.item} key={avenger.id} />
  );

  return (
    <ContainerList>
      {avengers.length > 0 ? (
        <FlatList
          data={avengers}
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
