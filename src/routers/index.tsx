import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackRouters } from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
}
