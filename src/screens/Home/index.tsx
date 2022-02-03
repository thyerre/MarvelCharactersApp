import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container } from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }
  return (
    <Container>
      <TouchableOpacity onPress={handleNavigateToDetail}>
        <Text>Home</Text>
      </TouchableOpacity>
    </Container>
  );
}
