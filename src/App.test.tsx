import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
    test("Should render the landing page component", () => {
        render(<App></App>);
        expect(screen.queryByTestId("landing-page")).toBeInTheDocument();
    });
});