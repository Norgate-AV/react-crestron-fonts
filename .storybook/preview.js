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
    fontSize: { type: "number", defaultValue: 100 },
    color: { type: "string", defaultValue: "#000" },
};
