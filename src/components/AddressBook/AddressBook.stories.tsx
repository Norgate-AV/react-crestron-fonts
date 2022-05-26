import { Meta } from "@storybook/react";
import { AddressBook } from "./AddressBook";
import { StoryTemplate } from "../../storybook/StoryTemplate";

const component = AddressBook;
const title = `Components/${component.name}`;
type ComponentType = typeof component;

export default {
    title,
    component,
} as Meta<ComponentType>;

export const Black = StoryTemplate<ComponentType>(
    { color: "#000" },
    { component },
).bind({});

export const White = StoryTemplate<ComponentType>(
    { color: "#FFF" },
    { component },
).bind({});

export const Custom = StoryTemplate<ComponentType>({}, { component }).bind({});
Custom.args = {
    color: "#FF80BF",
};
