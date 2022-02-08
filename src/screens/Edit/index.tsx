import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Input } from '../../components/Search/styles';
import { useMarvelCharacters } from '../../hooks/useMarvelCharacters';
import { MarvelCharacter } from '../../interfaces';
import { Container } from '../Detail/styles';
import { Label, Button, TextButton, Content, TextArea } from './styles';

export function Edit({ route }: any) {
  const navigation = useNavigation();
  const { marvelCharacters, setMarvelCharacters } = useMarvelCharacters();
  const { marvelCharacter } = route.params;

  async function save(character: MarvelCharacter) {
    const newMarvelCharacters = await marvelCharacters.map(
      (item: MarvelCharacter) => {
        if (item.id === character.id) {
          return character;
        }
        return item;
      },
    );

    await setMarvelCharacters(newMarvelCharacters);

    navigation.navigate('Home');
  }

  useEffect(() => {
    navigation.setOptions({ title: marvelCharacter.name });
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{
          ...marvelCharacter,
        }}
        onSubmit={values => save(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <KeyboardAvoidingView behavior="position" enabled>
            <Content>
              <Label>Name</Label>
              <Input
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />

              <Label>Description</Label>
              <TextArea
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                multiline
                numberOfLines={10}
              />

              <Button onPress={handleSubmit}>
                <TextButton>Save</TextButton>
              </Button>
            </Content>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </Container>
  );
}
