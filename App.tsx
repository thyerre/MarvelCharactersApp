import React from 'react';
import { AvengersProvider } from './src/providers/avengers';
import { Routes } from './src/routers';

const App = () => {
  return (
    <AvengersProvider>
      <Routes />
    </AvengersProvider>
  );
};
export default App;
