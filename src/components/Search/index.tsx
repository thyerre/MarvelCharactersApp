import React, { useState } from 'react';
import { ButtonSearch, ContainerSearch, Input } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMarvelCharacters } from '../../hooks/useMarvelCharacters';
import { getCharacters } from '../../service';
import { Keyboard } from 'react-native';

interface SearchProps {
  placeholder: string;
  placeholderTextColor: string;
}

export function Search({ placeholder, placeholderTextColor }: SearchProps) {
  const [search, setSearch] = useState<string>();
  const { setMarvelCharacters } = useMarvelCharacters();

  async function handleFindCharacters() {
    Keyboard.dismiss();
    if (search) {
      const marvelCharacters = await getCharacters({ nameStartsWith: search });
      setMarvelCharacters(marvelCharacters);
    }
  }

  async function setTextSearch(text: string) {
    setSearch(text);
    if (!text) {
      const marvelCharacters = await getCharacters();
      setMarvelCharacters(marvelCharacters);
    }
  }

  return (
    <ContainerSearch>
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(text: string) => setTextSearch(text)}
      />
      <ButtonSearch onPress={handleFindCharacters}>
        <Icon name="search" size={30} color="#0f131b" />
      </ButtonSearch>
    </ContainerSearch>
  );
}
