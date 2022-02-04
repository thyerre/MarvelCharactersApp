import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, TouchableOpacity } from 'react-native';

import { ListCard } from '../../components/ListCard';
import { Container, ContentCard, ContentSearch, TextTeste } from './styles';
import { Search } from '../../components/Search';

export function Home() {
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1d1f31"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <ContentSearch>
        <Search placeholder="Search" placeholderTextColor="#b1b1b1" />
      </ContentSearch>

      <ContentCard>
        <ListCard />
      </ContentCard>

      <TouchableOpacity onPress={handleNavigateToDetail}>
        <TextTeste>Home</TextTeste>
      </TouchableOpacity>
    </Container>
  );
}
