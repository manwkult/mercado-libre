import axios from '../../config/axios';
import { AxiosResponse } from 'axios';

import { Detail } from '../../models/Detail';

// eslint-disable-next-line
export default async (id: string) => {
  return axios.get(`/items/${id}`)
    .then((response: AxiosResponse) => {
      if (response && response.data) {
        return response.data as Detail;       
      } else {
        return null;
      }
    })
    .catch(error => console.log(error));
}