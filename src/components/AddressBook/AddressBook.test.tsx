import React from "react";
import { render } from "@testing-library/react";
import { AddressBook } from "./AddressBook";
import "@testing-library/jest-dom";

describe("AddressBook", () => {
    it("renders without crashing", () => {
        render(<AddressBook />);
    });
});
