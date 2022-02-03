import { httpApi } from '../api';

export function getAvengers() {
  return httpApi.get('thyerre').then(response => {
    console.log(response.data);
  });
}
