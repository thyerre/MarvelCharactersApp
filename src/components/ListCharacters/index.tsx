import React from 'react';
import { FlatList } from 'react-native';
import { useAvengers } from '../../hooks/useAvengers';
import { Character } from '../Character';
import { ContainerList } from './styles';

export function ListCharacters() {
  const { avengers } = useAvengers();
  console.log(avengers);
  const renderItem = (item: any) => <Character key={item.key} />;

  return (
    <ContainerList>
      <FlatList
        data={[
          { title: 'Title Text', key: 'item1' },
          { title: 'Title Text', key: 'item2' },
          { title: 'Title Text', key: 'item3' },
          { title: 'Title Text', key: 'item4' },
          { title: 'Title Text', key: 'item5' },
          { title: 'Title Text', key: 'item65' },
          { title: 'Title Text', key: 'item6' },
          { title: 'Title Text', key: 'item7' },
          { title: 'Title Text', key: 'item8' },
        ]}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </ContainerList>
  );
}
