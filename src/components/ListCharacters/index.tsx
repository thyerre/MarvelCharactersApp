import React from 'react';
import { FlatList } from 'react-native';
import { useAvengers } from '../../hooks/useAvengers';
import { Character } from '../Character';
import { ContainerList } from './styles';

export function ListCharacters() {
  const { avengers } = useAvengers();

  const renderItem = (avenger: any) => (
    <Character avenger={avenger.item} key={avenger.id} />
  );

  return (
    <ContainerList>
      <FlatList
        data={avengers}
        renderItem={renderItem}
        keyExtractor={(avenger: any) => avenger.id}
        showsVerticalScrollIndicator={false}
      />
    </ContainerList>
  );
}
