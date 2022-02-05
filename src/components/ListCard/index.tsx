import React from 'react';
import { FlatList } from 'react-native';

import { Card } from '../Card';
import { ContainerList } from './styles';

export function ListCard() {
  const banners = ['banner01', 'banner02', 'banner03', 'banner04'];
  const renderItem = ({ item }: any) => <Card image={item} key={item} />;

  return (
    <ContainerList>
      <FlatList
        horizontal
        data={banners}
        renderItem={renderItem}
        keyExtractor={(item: any) => item}
        showsVerticalScrollIndicator={false}
      />
    </ContainerList>
  );
}
