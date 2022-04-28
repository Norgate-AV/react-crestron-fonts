module.exports = {
    stories: ["../src/**/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode",
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
        // {
        //     name: "@storybook/addon-postcss",
        //     options: {
        //         postcssLoaderOptions: {
        //             implementation: require("postcss"),
        //         },
        //     },
        // },
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
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
    // webpackFinal: async (config, {configType}) => {
    //     config.module.rules.push({test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //             use: [{
    //                 loader: 'file-loader',
    //             }]})
    //     return config;
    // },
    // webpackFinal: async (config, {configType}) => {
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         use: [
    //             {
    //                 loader: 'postcss-loader',
    //                 options: {
    //                     indent: "postcss",
    //                     plugins: [
    //                         require("postcss")
    //                     ]
    //                 }
    //             }
    //         ]
    //     })
    //     return config;
    // },
};
