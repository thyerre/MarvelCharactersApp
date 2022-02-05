import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Alter } from '../screens/Alter';
import { SplashPage } from '../screens/SplashPage';
import { Avenger } from '../interfaces';

type RootStackParamList = {
  Home: undefined;
  SplashPage: undefined;
  Detail: { avenger: Avenger };
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
      <Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detail',
          headerStyle: {
            backgroundColor: '#1d1f31',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
          },
        }}
      />
      <Screen name="Alter" component={Alter} />
    </Navigator>
  );
}
