import Currencies from "./Currencies";
import * as frankfurter from "../../webservices/frankfurter";

describe("Currencies", () => {
    let currencies: Currencies;
    const testData = { "testKey": "testValue" };

    beforeAll(() => {
        const currenciesPromise: Promise<Object> = new Promise((resolve, _) => resolve(testData));
        jest.spyOn(frankfurter, "getCurrencies").mockReturnValue(currenciesPromise);
        currencies = new Currencies();
    });

    test("should set the fetched value in the currencies", async () => {
        const actualCurrencies = await currencies.getCurrencies();
        expect(actualCurrencies).toEqual(testData);
    });
});