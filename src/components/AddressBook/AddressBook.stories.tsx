import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddressBook } from "./AddressBook";

export default {
    title: "AddressBook",
    component: AddressBook,
} as ComponentMeta<typeof AddressBook>;

export const Default: ComponentStory<typeof AddressBook> = () => (
    <AddressBook />
);

export const AddressBook = Default;
