import axios from 'axios';

export const APIURL = 'http://3.39.236.36:8080';
export const client = axios.create({
  baseURL: APIURL,
  headers: {
    'Content-Type': 'application/json',
    accessToken: '',
  },
});
