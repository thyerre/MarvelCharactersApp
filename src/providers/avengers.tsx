import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { getAvengers } from '../service';

export const AvengersContext = createContext({} as any);

export const AvengersProvider = (props: any) => {
  const [avengers, setAvengers] = useState({
    name: 'Thyerre',
  } as any);

  async function getAllAvengers() {
    const avengersList = getAvengers();
    console.log(avengersList);
  }

  useEffect(() => {
    getAllAvengers();
  }, []);

  return (
    <AvengersContext.Provider value={{ avengers, setAvengers }}>
      {props.children}
    </AvengersContext.Provider>
  );
};
