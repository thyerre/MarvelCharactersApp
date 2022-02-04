import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { useAvengers } from '../../hooks/useAvengers';
import { ImageLogo, SplashContainer } from './styles';

export function SplashPage() {
  const { avengers } = useAvengers();
  const navigation = useNavigation();

  useEffect(() => {
    if (avengers.length > 0) {
      navigation.navigate('Home');
    }
  }, [avengers]);

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
