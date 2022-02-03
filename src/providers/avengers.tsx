import React, { createContext } from 'react';
import { useState } from 'react';

export const AvengersContext = createContext({} as any);

export const AvengersProvider = (props: any) => {
  const [avengers, setAvengers] = useState({
    name: 'Thyerre',
  } as any);

  return (
    <AvengersContext.Provider value={{ avengers, setAvengers }}>
      {props.children}
    </AvengersContext.Provider>
  );
};
