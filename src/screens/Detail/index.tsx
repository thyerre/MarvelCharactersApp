import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { GalleryList } from '../../components/GalleryList';
import { getComicsByIdCharacter } from '../../service';

import {
  ButtonEdit,
  ContainerDetail,
  ContentGallery,
  ContentIconEdit,
  ContentImg,
  ContentInfo,
  ImageCharacter,
  TextDescription,
  TextName,
  TextTitle,
} from './styles';

export function Detail({ route }: any) {
  const navigation = useNavigation();
  const [comics, setComics] = useState<any[]>([]);
  const { avenger } = route.params;

  async function findComics(id: number) {
    const list = await getComicsByIdCharacter(id);
    setComics(list);
  }

  useEffect(() => {
    navigation.setOptions({ title: avenger.name });
    findComics(avenger.id);
  }, []);

  return (
    <ContainerDetail>
      <ContentIconEdit>
        <ButtonEdit>
          <Icon name="edit" size={20} color="#0f131b" />
        </ButtonEdit>
      </ContentIconEdit>
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
        <TextDescription>
          {avenger.description ? avenger.description : 'No description'}
        </TextDescription>
      </ContentInfo>
      <ContentGallery>
        <GalleryList items={comics} title="Comics" />
      </ContentGallery>
    </ContainerDetail>
  );
}
