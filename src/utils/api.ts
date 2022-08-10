import axios from 'axios';
import {
  setLocalStorage,
  clearLocalStorage,
  getLocalStorage,
} from './localStorage';
import {lsKeys} from 'constants';

const api = axios.create({
  baseURL:
    'https://61ce6ff47067f600179c5e98.mockapi.io/v1/orders?page=1&limit=10',
});

// for cancel request
const source = axios.CancelToken.source();

type ApiGetFuncType = {
  url: string;
  params?: object;
};
type ApiGetReturnType = {
  success: boolean;
  data: any;
};

// Get data from api
export const apiGet = async ({
  url,
  params,
}: ApiGetFuncType): Promise<ApiGetReturnType> => {
  try {
    const {data} = await api.get(url, params);

    // If success
    // if (ok) {
    return {success: true, data};
    // }

    // return {success: false, data: null};
  } catch (error) {
    return {success: false, data: null};
  }
};
