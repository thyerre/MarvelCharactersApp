import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avenger } from '../../interfaces';

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
  avenger: Avenger;
}

export function Character({ avenger }: CharacterProps) {
  function LimitCharacters(text: string, limit: number = 60) {
    if (!text) {
      return 'No description';
    }
    return text.substr(0, limit).concat('...');
  }

  return (
    <ContainerItem>
      <Content>
        <ContentImg>
          <ImageCharacter
            source={{
              uri: `${avenger.thumbnail.path}.${avenger.thumbnail.extension}`,
            }}
          />
        </ContentImg>
        <ContentCenter>
          <ContentText>
            <TextName>{avenger.name}</TextName>
            <TextDescription>
              {LimitCharacters(avenger.description)}
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
