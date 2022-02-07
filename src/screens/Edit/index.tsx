import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Container } from '../Detail/styles';

export function Edit({ route }: any) {
  const navigation = useNavigation();

  const { marvelCharacter } = route.params;

  useEffect(() => {
    console.log(marvelCharacter);
    navigation.setOptions({ title: marvelCharacter.name });
  }, []);

  return (
    <Container>
      <Text>Edit</Text>
    </Container>
  );
}
