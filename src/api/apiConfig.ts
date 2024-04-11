import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.5.139:3333/',
  headers: {
    Authorization:
      'Bearer Mw.GX8NbTzx2MsA563tXpUpdy6kNuTxfe1XzsJB-VqGFeyw5AE5TXRwhtN1xAs7',
  },
});
