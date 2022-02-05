import React from 'react';
import { Content, ImageNotFound, TextNotFound } from './styles';

export function CharactersNotFound() {
  return (
    <Content>
      <TextNotFound>Characters not found</TextNotFound>
      <ImageNotFound source={require('./../../assets/img/marvel.png')} />
    </Content>
  );
}
