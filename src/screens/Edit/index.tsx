import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../../components/Search/styles';
import { useMarvelCharacters } from '../../hooks/useMarvelCharacters';
import { MarvelCharacter } from '../../interfaces';
import { Container } from '../Detail/styles';
import { Label, Button, TextButton, Content, TextArea, Error } from './styles';

export function Edit({ route }: any) {
  const navigation = useNavigation();
  const { marvelCharacters, setMarvelCharacters } = useMarvelCharacters();
  const { marvelCharacter } = route.params;

  const validateSchema = Yup.object().shape({
    name: Yup.string().required('mandatory name'),
    description: Yup.string().required('mandatory description'),
  });

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
        validationSchema={validateSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <KeyboardAvoidingView behavior="position" enabled>
            <Content>
              <Label>Name</Label>
              <Input
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <Error>{errors.name}</Error>
              ) : null}

              <Label>Description</Label>
              <TextArea
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                multiline
                numberOfLines={10}
              />
              {errors.description && touched.description ? (
                <Error>{errors.description}</Error>
              ) : null}

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
