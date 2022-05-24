import React from "react";
import { render } from "@testing-library/react";
import { Black as AddressBook } from "./AddressBook.stories";
import "@testing-library/jest-dom";

describe("AddressBook", () => {
    it("renders without crashing", () => {
        render(<AddressBook fontSize={150} color="#000" />);
    });
});
