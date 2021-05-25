import React from "react";
import { fireEvent, render, screen, act, queryByAttribute } from "@testing-library/react";
import AddNewCurrencyViewCtrl from "../AddNewCurrencyViewCtrl";

describe("<AddNewCurrency />", () => {

    let currencies = { "AUD": "Australian Dollar", "CAD": "Canadian Dollar", "USD": "United States Dollar", "EUR": "Euro" };

    const renderComponent = (viewModel) => {
        let component;
        act(() => { component = render(<AddNewCurrencyViewCtrl viewModel={viewModel} />); });
        return component;
    };

    test("Should render the card with the currencies select box", () => {
        const viewModel = {
            getCurrencies: jest.fn().mockReturnValue(currencies),
            addNewConversion: jest.fn()
        };
        renderComponent(viewModel);

        const listboxComponents = screen.queryAllByRole("combobox");
        expect(listboxComponents.length).toEqual(2);
        const ids = listboxComponents.map(element => {
            expect(element).toBeVisible();
            return element.getAttribute("id");
        });
        expect(ids).toEqual(["from", "to"]);

    });

    test("Should list the currencies provided in the select box", () => {
        const viewModel = {
            getCurrencies: jest.fn().mockReturnValue(currencies),
            addNewConversion: jest.fn()
        };
        renderComponent(viewModel);

        expect(viewModel.getCurrencies).toHaveBeenCalled();
        const listboxComponents = screen.queryAllByRole("combobox");
        const firstElement = listboxComponents.shift();
        act(() => { fireEvent.mouseDown(firstElement) });
        Object.values(currencies).forEach(currency => {
            const regex = new RegExp(currency);
            expect(screen.queryByText(regex)).toBeInTheDocument();
        });
    });

    test("Should call the onAdd callback", () => {
        const viewModel = {
            getCurrencies: jest.fn().mockReturnValue(currencies),
            addNewConversion: jest.fn()
        };
        renderComponent(viewModel);

        expect(viewModel.getCurrencies).toHaveBeenCalled();
        const listboxComponents = screen.queryAllByRole("combobox");
        const firstElement = listboxComponents.shift();
        const secondElement = listboxComponents.shift();
        act(() => { fireEvent.mouseDown(firstElement) });
        const usdOption = screen.queryByText(new RegExp(currencies.USD));

        act(() => {
            fireEvent.click(usdOption);
            fireEvent.mouseDown(secondElement);
        });
        const cadOption = screen.queryAllByText(new RegExp(currencies.CAD));
        act(() => { fireEvent.click(cadOption[1]) });
        act(() => { fireEvent.click(screen.queryByRole("button")) });
        expect(viewModel.addNewConversion).toHaveBeenCalled();
    });
});