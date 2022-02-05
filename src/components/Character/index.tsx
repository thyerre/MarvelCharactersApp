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
    return text.substr(0, limit).concat('...');
  }

  return (
    <ContainerItem>
      <Content>
        <ContentImg>
          <ImageCharacter
            source={{
              uri: `${avenger.thumbnail?.path}${avenger.thumbnail?.extension}`,
            }}
          />
        </ContentImg>
        <ContentCenter>
          <ContentText>
            <TextName>TRESTE</TextName>
            <TextDescription>
              {LimitCharacters(
                'asdsa dsada dqwdaasd as dsa sd asd sad sa dsad asd sad sa dsadsad sad s sad sada sdsadsadsadsadsadsa asd as da sd ada sdasdsad ad sa dsad  s dadw dasd',
              )}
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
