import React, { useState } from 'react';
import { ButtonSearch, ContainerSearch, Input } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAvengers } from '../../hooks/useAvengers';
import { getCharacters } from '../../service';
import { Keyboard } from 'react-native';

interface SearchProps {
  placeholder: string;
  placeholderTextColor: string;
}

export function Search({ placeholder, placeholderTextColor }: SearchProps) {
  const [search, setSearch] = useState<string>();
  const { setAvengers } = useAvengers();

  async function handleFindCharacters() {
    Keyboard.dismiss();
    if (search) {
      const avengers = await getCharacters({ nameStartsWith: search });
      setAvengers(avengers);
    }
  }

  async function setTextSearch(text: string) {
    setSearch(text);
    if (!text) {
      const avengers = await getCharacters();
      setAvengers(avengers);
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
