import {APIURL} from './key';
import axios from 'axios';
import {getData} from './asyncStorage';

const client = axios.create({
  baseURL: APIURL,
  headers: {
    Accept: 'application/json',
  },
});

client.interceptors.request.use(
  async function (config) {
    const token = await getData('accessToken');
    // console.log(token);

    config.headers['accessToken'] = token;
    console.log('client config: ', config);
    return config;
  },
  function (error) {
    console.log(error);
  },
);

export default client;
