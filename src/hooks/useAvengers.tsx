import { useContext } from 'react';
import { AvengersContext } from '../providers/avengers';

export function useAvengers() {
  return useContext(AvengersContext);
}
