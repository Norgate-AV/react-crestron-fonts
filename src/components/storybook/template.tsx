import React from "react";
import { Story, Meta } from "@storybook/react";
import { AddressBook } from "../AddressBook";
import { BaseComponentType } from "../../types";

type ComponentType = BaseComponentType<typeof AddressBook>;

export default {
    title: "Components/AddressBook",
    component: AddressBook,
    argTypes: {
        fontSize: { type: "number", defaultValue: 100 },
        color: { type: "string", defaultValue: "#000" },
    },
} as Meta<ComponentType>;

const Template: Story<ComponentType> = ({
    fontSize,
    color,
    ...args
}: ComponentType) => {
    const style = {
        fontSize: `${fontSize}px`,
        color,
    };

    return (
        <div style={style}>
            <AddressBook {...args} />
        </div>
    );
};

const Black = Template.bind({});
Black.args = {
    fontSize: 100,
    color: "#000",
};

const White = Template.bind({});
White.args = {
    fontSize: 100,
    color: "#fff",
};

const Custom = Template.bind({});
Custom.args = {
    fontSize: 100,
    color: "#fff",
};

export { Black, White, Custom };
