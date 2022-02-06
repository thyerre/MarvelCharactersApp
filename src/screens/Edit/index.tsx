import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Container } from '../Detail/styles';

export function Edit({ route }: any) {
  const navigation = useNavigation();

  const { avenger } = route.params;

  useEffect(() => {
	console.log(avenger);
    // navigation.setOptions({ title: avenger.name });
  }, []);

  return (
    <Container>
      <Text>Edit</Text>
    </Container>
  );
}
