import React from 'react';
import { ScrollView } from 'react-native';

import { Card } from '../Card';
import { ContainerList } from './styles';

export function ListCard() {
  return (
    <ContainerList>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card image="banner01" />
        <Card image="banner02" />
        <Card image="banner03" />
        <Card image="banner04" />
      </ScrollView>
    </ContainerList>
  );
}
