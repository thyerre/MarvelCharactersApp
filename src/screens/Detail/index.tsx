import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import {
  ContainerDetail,
  ContentImg,
  ContentInfo,
  ImageCharacter,
  TextDescription,
  TextName,
  TextTitle,
} from './styles';

export function Detail({ route }: any) {
  const navigation = useNavigation();
  const { avenger } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: avenger.name });
  }, []);

  return (
    <ContainerDetail>
      <ContentImg>
        <ImageCharacter
          source={{
            uri: `${avenger.thumbnail.path}.${avenger.thumbnail.extension}`,
          }}
        />
      </ContentImg>
      <ContentInfo>
        <TextTitle>Name</TextTitle>
        <TextName>{avenger.name}</TextName>
        <TextTitle>Description</TextTitle>
        <TextDescription>{avenger.description}</TextDescription>
      </ContentInfo>
    </ContainerDetail>
  );
}
