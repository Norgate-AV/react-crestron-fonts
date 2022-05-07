import { Meta } from "@storybook/react";
// import { useArgTypes } from "@storybook/api";
import { AddressBook } from "./AddressBook";
import { StoryTemplate } from "../storybook/StoryTemplate";
import { defaultArgs } from "../storybook/defaultArgs";

const component = AddressBook;
const title = `Components/${component.name}`;
type ComponentType = typeof component;
// const { argTypes } = useArgTypes();
const { fontSize } = defaultArgs;

export default {
    title,
    component,
    // argTypes,
} as Meta<ComponentType>;

export const Black = StoryTemplate<ComponentType>(
    { fontSize, color: "#000" },
    { component },
).bind({});
Black.args = {
    fontSize,
    color: "#000",
};

export const White = StoryTemplate<ComponentType>(
    { fontSize, color: "#FFF" },
    { component },
).bind({});
White.args = {
    fontSize,
    color: "#FFF",
};

export const Custom = StoryTemplate<ComponentType>(
    { fontSize, color: "#FF80BF" },
    { component },
).bind({});
Custom.args = {
    fontSize,
    color: "#FF80BF",
};
