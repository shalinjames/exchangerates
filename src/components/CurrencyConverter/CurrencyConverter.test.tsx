import React from "react";
import { act, render, screen } from "@testing-library/react"
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import CurrencyConverter from "./CurrencyConverter";
import * as frankfurter from "../../webservices/frankfurter";

describe("<CurrencyConverter />", () => {
    let mock = new MockAdapter(axios);

    beforeEach(() => {
        jest.spyOn(frankfurter, "getLatestExchangeRate").mockReturnValue(new Promise((resolve) => resolve(72)));
    });
    afterAll(() => {
        mock.reset();
    });

    test("should display the root element", async () => {
        await act(async () => { await render(<CurrencyConverter from="EUR" to="INR" />) });
        const root = screen.getByTitle("currency-converter");
        expect(root).toBeInTheDocument();
    });

    test("should display the root element from and to elements", async () => {
        await act(async () => { await render(<CurrencyConverter from="EUR" to="INR" />) });
        const from = screen.getByTitle("currency-from");
        const to = screen.getByTitle("currency-to");
        expect(from).toHaveTextContent("EUR");
        expect(to).toHaveTextContent("INR");
    });

    test("should call the getLatestExchangeRate", async () => {
        await act(async () => { await render(<CurrencyConverter from="EUR" to="INR" />) });
        const conversionRate = screen.getByTitle("conversion-rate");
        expect(conversionRate).toHaveTextContent("72");
    });
});