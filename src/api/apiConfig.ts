import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://192.168.5.139:3333/',
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization:
      'Bearer Mg.LbhTKdHcTmx-6STtqBJhzFv76hrb9YQIC5wj7_Ofxte0MERXZIFi8MP02zW2',
  },
});
