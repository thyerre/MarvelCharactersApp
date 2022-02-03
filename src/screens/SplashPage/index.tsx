import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useAvengers } from '../../hooks/useAvengers';
import { ImageLogo, SplashContainer } from './styles';

export function SplashPage() {
  const { avengers, setAvengers } = useAvengers();

  useEffect(() => {
    console.log(avengers);
    setAvengers({ name: 'Thyerre1' });
    console.log(avengers);
  }, []);

  return (
    <SplashContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <ImageLogo source={require('./../../assets/img/logo.png')} />
    </SplashContainer>
  );
}
