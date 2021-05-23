import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddNewCurrencyViewCtrl from "./AddNewCurrencyViewCtrl";

describe("When AddNewCurrency component is render", () => {

    let handleAdd;
    beforeEach(() => {
        handleAdd = jest.fn();
        render(<AddNewCurrencyViewCtrl handleAdd={handleAdd} />);
    });

    test("Should render the card with button as a child", () => {
        expect(screen.queryByTestId("add-new-currency")).toBeInTheDocument();
    });

    test("Should when the button is clicked it should call the handleAdd callback", () => {
        const addNewCurrencyBtn = screen.queryByTestId("add-new-currency");
        fireEvent.click(addNewCurrencyBtn);
        expect(handleAdd).toHaveBeenCalled();
    });
});