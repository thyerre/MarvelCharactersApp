import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useMarvelCharacters } from '../../hooks/useMarvelCharacters';
import { ImageLogo, SplashContainer } from './styles';

export function SplashPage() {
  const { marvelCharacters } = useMarvelCharacters();
  const navigation = useNavigation();

  useEffect(() => {
    if (marvelCharacters.length > 0) {
      navigation.navigate('Home');
    }
  }, [marvelCharacters]);

  return (
    <SplashContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#1d1f31"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <ImageLogo source={require('./../../assets/img/logo.png')} />
    </SplashContainer>
  );
}
