import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddressBook } from "./AddressBook";

export default {
    title: "Components/AddressBook",
    component: AddressBook,
    argTypes: {
        fontSize: { type: "number", defaultValue: 100 },
        color: { type: "string", defaultValue: "#000" }
    }
} as ComponentMeta<typeof AddressBook>;

const Template: ComponentStory<typeof AddressBook> = ({ fontSize, color, ...args }) => {
    const style = {
        fontSize: `${fontSize}px`, 
        color: color
    }

    return (
        <div style={style}>
            <AddressBook {...args} />
        </div>
    )
}

export const Black = Template.bind({})
Black.args = {
    fontSize: 100,
    color: "#000"
}

export const White = Template.bind({})
White.args = {
    fontSize: 100,
    color: "#fff"
}
