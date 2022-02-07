import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { GalleryList } from '../../components/GalleryList';
import { getComicsByIdCharacter } from '../../service';

import {
  ButtonEdit,
  Container,
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
  const [refreshing, setRefreshing] = useState(false);
  const [comics, setComics] = useState<any[]>([]);

  const { marvelCharacter } = route.params;
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setComics([]);
    findComics(marvelCharacter.id);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  async function findComics(id: number) {
    const list = await getComicsByIdCharacter(id);
    setComics(list);
  }

  useEffect(() => {
    navigation.setOptions({ title: marvelCharacter.name });
    findComics(marvelCharacter.id);
  }, []);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <ContentIconEdit>
        <ButtonEdit
          onPress={() => navigation.navigate('Edit', marvelCharacter)}
        >
          <Icon name="edit" size={20} color="#0f131b" />
        </ButtonEdit>
      </ContentIconEdit>
      <ContentImg>
        <ImageCharacter
          source={{
            uri: `${marvelCharacter.thumbnail.path}.${marvelCharacter.thumbnail.extension}`,
          }}
        />
      </ContentImg>
      <ContentInfo>
        <TextTitle>Name</TextTitle>
        <TextName>{marvelCharacter.name}</TextName>
        <TextTitle>Description</TextTitle>
        <TextDescription>
          {marvelCharacter.description
            ? marvelCharacter.description
            : 'No description'}
        </TextDescription>
      </ContentInfo>
      <ContentGallery>
        <GalleryList items={comics} title="Comics" />
      </ContentGallery>
    </Container>
  );
}
