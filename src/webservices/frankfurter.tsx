import axios from 'axios';
import { latestExchangeRate, currenciesUrl } from './urls';

export const getLatestExchangeRate = ({ amount, from, to }: Record<string, any>): Promise<number> => {

    return new Promise((resolve, reject) => {
        axios.get(latestExchangeRate, {
            params: {
                amount,
                from,
                to
            }
        })
            .then(response => resolve(response.data.rates[to]))
            .catch(e => reject(e))
    });
};

export const getCurrencies = (): Promise<Array<any>> => {
    return new Promise((resolve, reject) => {
        axios.get(currenciesUrl)
            .then(response => resolve(response.data))
            .catch(e => reject(e));
    });
}