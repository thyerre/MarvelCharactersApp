import React from 'react';
import { ButtonSearch, ContainerSearch, Input } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchProps {
  placeholder: string;
  placeholderTextColor: string;
}

export function Search({ ...rest }: SearchProps) {
  return (
    <ContainerSearch>
      <Input {...rest} />
      <ButtonSearch>
        <Icon name="search" size={30} color="#0f131b" />
      </ButtonSearch>
    </ContainerSearch>
  );
}
