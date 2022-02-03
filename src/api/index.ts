import axios from 'axios';

const API_GITHUB = 'https://api.github.com/users';

export const httpApi = axios.create({
  baseURL: API_GITHUB,
});
