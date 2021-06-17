
import { render, screen } from "@testing-library/react";
import React from "react";
import CurrencyConverterViewCtrl from "./CurrencyConverterViewCtrl";

describe("<CurrencyConverterViewCtrl>", () => {
    test("Should not render the values without the proper keys", () => {
        const viewModel = {};
        viewModel.getCurrencies = jest.fn().mockReturnValue({
            "test1": "displayTest1",
            "test2": "displayTest2"
        });

        render(<CurrencyConverterViewCtrl viewModel={viewModel} from="abcd" to="def" />);
        expect(screen.queryByText(/displayTest1/)).not.toBeInTheDocument();
        expect(screen.queryByText(/displayTest2/)).not.toBeInTheDocument();
    });

    test("Should show conversion from and to text that was received from model", () => {
        const viewModel = {};
        viewModel.getCurrencies = jest.fn().mockReturnValue({
            "test1": "displayTest1",
            "test2": "displayTest2"
        });

        render(<CurrencyConverterViewCtrl viewModel={viewModel} from="test1" to="test2" />);
        expect(screen.queryByText(/displayTest1/)).toBeInTheDocument();
        expect(screen.queryByText(/displayTest2/)).toBeInTheDocument();
    });

});