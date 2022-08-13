import axios, { AxiosPromise } from 'axios';
import { CatDataType, FetchCatListParams } from './type';

export const fetchCatListRequest = (
  params: FetchCatListParams,
): AxiosPromise<CatDataType[]> => {
  return axios({
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/images/search',
    params,
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY || '',
      'Content-Type': 'application/json',
    },
  });
};
