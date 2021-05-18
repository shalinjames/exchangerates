
// Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: jest.fn().mockImplementation(query => ({
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(), // deprecated
//         removeListener: jest.fn(), // deprecated
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn(),
//     })),
// });

import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LandingPage from "./LandingPage";

describe("<Landing Page/>", () => {

    test("Should render the page with the AddNewCurrency Button at the initial render", () => {
        render(<LandingPage></LandingPage>);
        const addNewCurrencyBtn = screen.queryByTestId("add-new-currency");
        expect(addNewCurrencyBtn).toBeInTheDocument();
    });

    test("Should add a currency card when clicking AddNewCurrency Button", () => {
        render(<LandingPage></LandingPage>);
        let currencyCardsCount = screen.queryAllByTestId("currency-card").length;
        const addNewCurrencyBtn = screen.queryByTestId("add-new-currency");
        expect(addNewCurrencyBtn).toBeInTheDocument();
        act(() => { fireEvent.click(addNewCurrencyBtn) });

        expect(screen.queryAllByTestId("currency-card").length).toEqual(currencyCardsCount + 1)
    });
});