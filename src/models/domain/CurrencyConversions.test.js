
import CurrencyConversions from "./CurrencyConversions";
import * as frankfurter from "../../webservices/frankfurter";
describe("CurrencyConversion", () => {

    test("Should add timestamp as unique id", async () => {

        jest.spyOn(frankfurter, "getLatestExchangeRate").mockResolvedValue("248");

        const conversion = new CurrencyConversions();
        conversion.addConversion({ from: "from", to: "to" });
        const result = await conversion.getConversions();
        expect(result).toEqual(expect.arrayContaining([{ from: "from", to: "to", conversion: "248", id: expect.anything() }]))

    });
});