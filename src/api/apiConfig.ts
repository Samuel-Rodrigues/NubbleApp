import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.5.142:3333/',
  headers: {
    Authorization:
      'Bearer MTM.J06iryfs7vuhQprOSQPZwlyg19fLE_YMJpuYHomfy4IGFGLDo2KYyyYErI0w',
  },
});
