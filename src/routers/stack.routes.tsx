import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Alter } from '../screens/Alter';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRouters() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Detail" component={Detail} />
      <Screen name="Alter" component={Alter} />
    </Navigator>
  );
}
