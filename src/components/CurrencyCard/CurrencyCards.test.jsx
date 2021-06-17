import React from "react";
import { render, screen } from "@testing-library/react";
import CurrencyCardsView from "./CurrencyCardsView";

describe("<CurrencyCards>", () => {
    test("Should throw an error while there is no proper model", () => {
        const viewModel = {};
        expect(() => render(<CurrencyCardsView viewModel={viewModel} />)).toThrowError();
    });

    test("Should display the currency cards while receiving the cards from model", () => {
        const getConversions = jest.fn().mockReturnValue([
            {
                from: "fromTest1",
                to: "toTest1",
                conversion: "toConversion1"
            },
            {
                from: "fromTest2",
                to: "toTest2",
                conversion: "toConversion2"
            },
            {
                from: "fromTest3",
                to: "toTest3",
                conversion: "toConversion3"
            }
        ]);

        render(<CurrencyCardsView viewModel={{ getConversions }} />);

        expect(screen.queryAllByText(/toConversion/g).length).toEqual(3);
    });

});