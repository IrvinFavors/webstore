import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Admin from "./Admin";

describe("Checkout Process", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );
    });
    test("Admin can add products", () => {
        const addProductButton = screen.getByText("Add Product");
        fireEvent.click(addProductButton);

        setTimeout(() => {
            const addProductForm = screen.getByTestId("addProductForm");
            expect(addProductForm).toBeInTheDocument();
        }, 4000);
    });
    test("Admin can remove products", () => {
        const removeProductButton = screen.getByText("Remove Product");
        fireEvent.click(removeProductButton);

        setTimeout(() => {
            const removeProductForm = screen.getByTestId("removeProductForm");
            expect(removeProductForm).toBeInTheDocument();
        }, 4000);
    });
    test("Admin can view pending orders and select an order", () => {
        const pendingOrdersHeader = screen.getByText("Pending Orders");
        expect(pendingOrdersHeader).toBeInTheDocument();
        const selectElement = screen.getByText(/Select an Order/i);
        expect(selectElement).toBeInTheDocument();
    });
});