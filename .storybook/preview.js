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
    fontSize: {
        name: "Font Size",
        type: { name: "number", required: false },
        defaultValue: 150,
        description: "Font size in pixels",
        control: {
            type: "number",
        },
    },
    color: {
        name: "Color",
    },
};
