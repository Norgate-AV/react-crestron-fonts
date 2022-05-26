import React from "react";
import { render } from "@testing-library/react";
import { Black, White, Custom } from "./AddressBook.stories";
import { AddressBook } from "..";
import "@testing-library/jest-dom";

const component = AddressBook;
const stories = {
    black: `${component.name}Story/Black`,
    white: `${component.name}Story/White`,
    custom: `${component.name}Story/Custom`,
};

describe(`${component.name}`, () => {
    it("renders without crashing", () => {
        const tree = render(<AddressBook />);
        expect(tree).toMatchSnapshot();
    });
});

describe(`${stories.black}`, () => {
    it("renders without crashing", () => {
        const tree = render(<Black />);
        expect(tree).toMatchSnapshot();
    });
});

describe(`${stories.white}`, () => {
    it("renders without crashing", () => {
        const tree = render(<White />);
        expect(tree).toMatchSnapshot();
    });
});

describe(`${stories.custom}`, () => {
    it("renders without crashing", () => {
        const tree = render(<Custom />);
        expect(tree).toMatchSnapshot();
    });
});
