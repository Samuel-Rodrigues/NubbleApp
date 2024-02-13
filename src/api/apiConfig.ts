import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.5.139:3333/',
  headers: {
    Authorization:
      'Bearer MQ.W2D9J347s2y2OCK4UpDb-OatChGzXCh8yKrk2nS27PLjR8kAe4Xe3UDNzPbq',
  },
});
