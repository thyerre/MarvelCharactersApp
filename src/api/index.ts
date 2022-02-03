import axios from 'axios';
import { API_AVENGERS, PUBLIC_KEY, PRIVATE_KEY } from '@env';
import md5 from 'md5';

const timestamp = Number(new Date());
const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const httpApi = axios.create({
  baseURL: API_AVENGERS,
  params: {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
  },
});
