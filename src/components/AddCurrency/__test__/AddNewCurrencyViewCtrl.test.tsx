import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import AddNewCurrencyViewCtrl from "../AddNewCurrencyViewCtrl";

describe("<AddNewCurrency />", () => {
    let viewModel: Record<string, any> = {
        getCurrencies: null,
        addNewConversion: null
    }

    let currencies = { "AUD": "Australian Dollar", "CAD": "Canadian Dollar", "USD": "United States Dollar", "EUR": "Euro" };

    const renderComponent = () => {
        viewModel = {
            getCurrencies: jest.fn().mockReturnValue(currencies),
            addNewConversion: jest.fn()
        };
        act(() => { render(<AddNewCurrencyViewCtrl viewModel={viewModel} />) });
    };

    test("Should render the card with the currencies select box from and two", () => {
        renderComponent();
        const listboxComponents = screen.queryAllByRole("combobox");
        expect(listboxComponents.length).toEqual(2);
        const ids = listboxComponents.map(select => select.getAttribute("name"));
        expect(ids).toEqual(["from", "to"]);

    });

    test("Should list the currencies provided in the select box", () => {
        renderComponent();

        expect(viewModel.getCurrencies).toHaveBeenCalled();
        const listboxComponents = screen.queryAllByRole("combobox");
        const firstElement = listboxComponents.shift();
        expect(firstElement?.childNodes.length).toEqual(Object.keys(currencies).length);
        const options: Array<string> = [];
        firstElement?.childNodes.forEach(node => {
            const tuple = node.textContent?.split("-");
            options.push(tuple?.shift() as string);
        });
        expect(options).toEqual(Object.keys(currencies));
    });

    test("Should call the onAdd callback", () => {
        const options = ["EUR", "USD"];
        renderComponent();

        expect(viewModel.getCurrencies).toHaveBeenCalled();
        const listboxComponents = screen.queryAllByRole("combobox");

        listboxComponents.forEach((select, index) => {
            const event = { target: { value: options[index] } };
            act(() => { fireEvent.change(select, event) });
        });

        act(() => {
            const buttonElement = screen.queryByRole("button")
            fireEvent.click(buttonElement as HTMLElement)
        });
        expect(viewModel.addNewConversion).toHaveBeenCalled();
    });
});