import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.5.139:3333/',
  headers: {
    Authorization:
      'Bearer Mg.ybfn32X6K3c9ujx518-A8GV8yV2R93yoZ6KSH4AU3V1rO0XovS-F73DOCjwQ',
  },
});
