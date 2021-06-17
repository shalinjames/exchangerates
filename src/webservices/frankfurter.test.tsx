import axios, { AxiosResponse } from 'axios';
import MockAdapter from "axios-mock-adapter";

import { getLatestExchangeRate, getCurrencies } from './frankfurter';
import { latestExchangeRate, currenciesUrl } from './urls';
import conversionResponseJson from '../test/conversion.response.json';
import currenciesResponseJson from "../test/currencies.response.json";


describe("Frankfurter", () => {
    let mock = new MockAdapter(axios);

    afterAll(() => {
        mock.reset();
    });

    test("Should return a response with latest exchange rates", async () => {
        mock.onGet(latestExchangeRate).reply(200, conversionResponseJson);
        const exchangeRate = await getLatestExchangeRate({ amount: 1, from: "EUR", to: "INR" });
        expect(exchangeRate).toEqual(73.149);
    });
    test("Should reject when it receive an error from latest exchange rates endpoint", () => {
        mock.onGet(latestExchangeRate).reply(404);
        return getLatestExchangeRate({ amount: 1, from: "EUR", to: "INR" }).catch(e =>
            expect(e.message).toEqual(expect.stringContaining("status code 404"))

        )
    });


    test("Should return a response with currencies", async () => {
        mock.onGet(currenciesUrl).reply(200, currenciesResponseJson);
        const currencies = await getCurrencies()
        expect(currencies).toEqual(currenciesResponseJson);
    });

    test("Should reject when it receive an error from latest currencies endpoint", () => {
        mock.onGet(currenciesUrl).reply(404);
        return getCurrencies().catch(e =>
            expect(e.message).toEqual(expect.stringContaining("status code 404"))

        )
    });
});