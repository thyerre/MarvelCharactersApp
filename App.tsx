import React from 'react';
import { MarvelCharacterProvider } from './src/providers/avengers';
import { Routes } from './src/routers';

const App = () => {
  return (
    <MarvelCharacterProvider>
      <Routes />
    </MarvelCharacterProvider>
  );
};
export default App;
