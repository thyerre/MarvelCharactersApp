import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { ListCard } from '../../components/ListCard';
import { Container, ContentHeader, TextTeste } from './styles';

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
        backgroundColor="#181a20"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />

      <ContentHeader>
        <ListCard />
      </ContentHeader>

      <TouchableOpacity onPress={handleNavigateToDetail}>
        <TextTeste>Home</TextTeste>
      </TouchableOpacity>
    </Container>
  );
}
