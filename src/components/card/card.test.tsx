import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from "./card";


describe("Card Component", () => {

    test("should render the card with the provided title and description", () => {
        render(<Card title="sometitle" desc="somedesc" />);
        expect(screen.getByText(/sometitle/i)).toBeInTheDocument();
    });
});