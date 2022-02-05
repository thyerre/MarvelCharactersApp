import React from 'react';
import { StatusBar } from 'react-native';

import { ListCard } from '../../components/ListCard';
import { Container, ContentCard, ContentList, ContentSearch } from './styles';
import { Search } from '../../components/Search';
import { ListCharacters } from '../../components/ListCharacters';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1d1f31"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <ContentSearch>
        <Search
          placeholder="Search characters"
          placeholderTextColor="#b1b1b1"
        />
      </ContentSearch>

      <ContentCard>
        <ListCard />
      </ContentCard>

      <ContentList>
        <ListCharacters />
      </ContentList>
    </Container>
  );
}
