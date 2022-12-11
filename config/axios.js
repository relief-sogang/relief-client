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

client.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    const provider = await getData('provider');

    if (provider === 'kakao') {
      // code & accessToken 다시 받기
    }
    return Promise.reject(error);
  },
);

export default client;
