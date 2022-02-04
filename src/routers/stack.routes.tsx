import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Alter } from '../screens/Alter';
import { SplashPage } from '../screens/SplashPage';

type RootStackParamList = {
  Home: undefined;
  SplashPage: undefined;
  Detail: { id: string };
  Alter: { id: string };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRouters() {
  return (
    <Navigator
      initialRouteName="SplashPage"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Screen
        name="SplashPage"
        component={SplashPage}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Detail" component={Detail} />
      <Screen name="Alter" component={Alter} />
    </Navigator>
  );
}
