import { ColorControl } from "@storybook/components";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: "^on.*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
        },
    },
};

export const argTypes = {
    theme: { control: { options: ["light", "dark"] } },
    fontSize: {
        name: "Font Size",
        type: { name: "number", required: true },
        defaultValue: 100,
        description: "Font size in pixels",
        control: {
            type: null,
        },
    },
    color: {
        name: "Color",
        type: { name: "string", required: true },
        defaultValue: "#000",
        description: "Color of the text",
        control: {
            type: null,
        },
    },
};

export const args = { theme: "dark" };
