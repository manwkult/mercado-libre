import axios from '../../config/axios';
import { AxiosResponse } from 'axios';

import { Items } from '../../models/Items';

// eslint-disable-next-line
export default async (query: string) => {
  return axios.get(`/items?q=${query}`)
    .then((response: AxiosResponse) => {
      if (response && response.data) {
        return response.data as Items;       
      } else {
        return null;
      }
    })
    .catch(error => console.log(error));
}