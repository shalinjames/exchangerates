import axios, { AxiosResponse } from 'axios';
import MockAdapter from "axios-mock-adapter";

import { getLatestExchangeRate } from './frankfurter';
import { latestExchangeRate } from './urls';
import conversionResponseJson from '../test/conversion.response.json'


describe("Frankfurter", () => {
    let mock = new MockAdapter(axios);

    afterAll(() => {
        mock.reset();
    });

    test("Should return a response with latest exchange rates", () => {
        mock.onGet(latestExchangeRate).reply(200, conversionResponseJson);
        return getLatestExchangeRate({ amount: 1, from: "EUR", to: "INR" }).then(response => {
            expect(response).toEqual(73.149);
        });
    });
});