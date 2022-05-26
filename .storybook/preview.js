// import { themes } from "@storybook/theming";
import dracula from "./dracula";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        theme: dracula,
    },
    darkMode: {
        current: "dark",
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
