import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MarvelCharacter } from '../../interfaces';

import {
  ContainerItem,
  Content,
  ContentCenter,
  ContentImg,
  ContentText,
  ImageCharacter,
  TextDescription,
  TextName,
} from './styles';

interface CharacterProps {
  marvelCharacter: MarvelCharacter;
}

export function Character({ marvelCharacter }: CharacterProps) {
  const navigation = useNavigation();

  function LimitCharacters(text: string, limit: number = 60) {
    if (!text) {
      return 'No description';
    }

    if (text.length > limit) {
      return text.substr(0, limit).concat('...');
    }

    return text;
  }

  return (
    <ContainerItem>
      <Content
        onPress={() => navigation.navigate('Detail', { marvelCharacter })}
      >
        <ContentImg>
          <ImageCharacter
            source={{
              uri: `${marvelCharacter.thumbnail.path}.${marvelCharacter.thumbnail.extension}`,
            }}
          />
        </ContentImg>
        <ContentCenter>
          <ContentText>
            <TextName>{marvelCharacter.name}</TextName>
            <TextDescription>
              {LimitCharacters(marvelCharacter.description)}
            </TextDescription>
          </ContentText>
        </ContentCenter>
        <ContentImg>
          <Icon name="chevron-right" size={30} color="#b1b1b1" />
        </ContentImg>
      </Content>
    </ContainerItem>
  );
}
