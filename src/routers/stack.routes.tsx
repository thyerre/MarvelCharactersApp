import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Edit } from '../screens/Edit';
import { SplashPage } from '../screens/SplashPage';
import { MarvelCharacter } from '../interfaces';

type RootStackParamList = {
  Home: undefined;
  SplashPage: undefined;
  Detail: { marvelCharacter: MarvelCharacter };
  Edit: { marvelCharacter: MarvelCharacter };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const options: NativeStackNavigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: '#1d1f31',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '400',
  },
  headerShown: true,
};

const headerShownFalse = {
  headerShown: false,
};

export function StackRouters() {
  return (
    <Navigator initialRouteName="SplashPage" screenOptions={headerShownFalse}>
      <Screen
        name="SplashPage"
        component={SplashPage}
        options={headerShownFalse}
      />
      <Screen name="Home" component={Home} options={headerShownFalse} />
      <Screen name="Detail" component={Detail} options={options} />
      <Screen name="Edit" component={Edit} options={options} />
    </Navigator>
  );
}
