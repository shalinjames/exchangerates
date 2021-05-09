import axios, { AxiosResponse } from 'axios';
import MockAdapter from "axios-mock-adapter";

import { getLatestExchangeRate } from './frankfurter';
import { latestExchangeRate } from './urls';
import latestExchangeRateJson from '../test/latestexchange.response.json'


describe("Frankfurter", () => {
    let mock = new MockAdapter(axios);;

    afterAll(() => {
        mock.reset();
    });

    test("Should return a response with latest exchange rates", () => {
        mock.onGet(latestExchangeRate).reply(200, latestExchangeRateJson);
        return getLatestExchangeRate().then(response => {
            expect(response.data).toEqual(latestExchangeRateJson);
        });
    });
});