import axios, { AxiosResponse } from 'axios';
import { latestExchangeRate } from './urls';

export const getLatestExchangeRate = (): Promise<AxiosResponse> => {
    return axios.get(latestExchangeRate);
}