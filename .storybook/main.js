module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        // "@storybook/addon-interactions",
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
                prettierConfig: {
                    printWidth: 80,
                    singleQuote: false,
                    tabWidth: 4,
                    bracketSpacing: true,
                    trailingComma: "all",
                },
            },
        },
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
        "storybook-css-modules-preset",
        "storybook-dark-mode",
    ],
    framework: "@storybook/react",
    typescript: {
        check: true, // type-check stories during Storybook build
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
};
